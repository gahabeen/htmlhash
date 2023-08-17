import { tags } from './tags';

const MARKUP_PATTERN = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][-.:0-9_a-zA-Z]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/g;
const ATTRIBUTE_PATTERN = /(?:^|\s)\s*([a-zA-Z_:][a-zA-Z0-9_.:-]*)\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+)/gi;
const FRAME_FLAG = 'documentfragmentcontainer';

export type HTMLTraverseStepperAbort = () => void;
export type HTMLTraverseStepper = (element: HTMLElement, abort: HTMLTraverseStepperAbort) => any | void;
export type HTMLTraverseStepperNoAbort = (element: HTMLElement) => any | void;

export type HTMLTraverseHandlers = {
  childHandler?: HTMLTraverseStepper,
  parentHandler?: HTMLTraverseStepper,
};

export type TagName = typeof tags[number];

const SELF_CLOSING_ELEMENTS = {
  area: true,
  base: true,
  br: true,
  col: true,
  hr: true,
  img: true,
  input: true,
  link: true,
  meta: true,
  source: true,
  embed: true,
  param: true,
  track: true,
  wbr: true,
};

const ELEMENTS_CLOSED_BY_OPENINGS = {
  li: { li: true, },
  p: { p: true, div: true },
  b: { div: true },
  td: { td: true, th: true },
  th: { td: true, th: true },
  h1: { h1: true },
  h2: { h2: true },
  h3: { h3: true },
  h4: { h4: true },
  h5: { h5: true },
  h6: { h6: true },
};

const ELEMENTS_CLOSED_BY_CLOSING = {
  li: { ul: true, ol: true },
  a: { div: true },
  b: { div: true },
  i: { div: true },
  p: { div: true },
  td: { tr: true, table: true },
  th: { tr: true, table: true },
};

// check https://github.com/taoqf/node-html-parser/blob/main/src/nodes/html.ts#L913 for reference

// export function createStore() {
//   let kv: Record<string, any> = {};

//   return Object.create({
//     has: function (key: string) {
//       return (key in kv);
//     },
//     get: function (key: string) {
//       return kv[key];
//     },
//     set: function (key: string, value: any) {
//       kv[key] = value
//     }
//   })
// }

// export type Store = {
//   has: (key: string) => boolean
//   get: (key: string | number) => any
//   set: (key: string | number, value: any) => void
// }

export class HTMLElement {
  public range: readonly [number, number];
  tagName: TagName | 'root'
  attributes: Record<string, string>
  childElements: HTMLElement[]
  parentElement: HTMLElement | undefined = undefined
  innerText: string | null = null

  private _attributesKeys: string[] | undefined = undefined
  private _previousSibling: HTMLElement | undefined = undefined
  private _parents: HTMLElement[] | undefined = undefined
  // private _cache: Store | undefined = undefined

  constructor(tagName: TagName | 'root' = 'root', attributes: Record<string, string> = {}, range: readonly [number, number] = [0, 0]) {
    this.tagName = tagName;
    this.attributes = attributes;
    this.range = range;
    this.childElements = [];
  }

  // set cache(cache: Store | undefined) {
  //   this._cache = cache;
  // }

  // get cache() {
  //   return this._cache;
  // }

  attributesKeys() {
    if (this._attributesKeys === undefined) {
      this._attributesKeys = Object.keys(this.attributes)
    }
    return this._attributesKeys || [];
  }

  previousSibling() {
    if (this._previousSibling === undefined) {
      const parent = this.parentElement;
      if (parent) {
        const index = parent.childElements.indexOf(this);
        if (index) {
          this._previousSibling = parent.childElements?.[index - 1];
        }
      }
    }
    return this._previousSibling;
  }

  appendChild(element: HTMLElement) {
    this.childElements.push(element);
    return element;
  }

  parentElements() {
    if (this._parents === undefined) {
      let parent = this.parentElement;
      let parentElements = [];
      while (parent) {
        parentElements.push(parent);
        parent = parent.parentElement;
      }
      return parentElements;
    }

    return this._parents;
  }
}

function isTextElement(tagName: string) {
  // const tags = ['title', 'script', 'noscript', 'style', 'pre'];
  const tags = ['script', 'noscript'];
  return tags.map((it) => new RegExp(`^${it}$`, 'i')).some((it) => it.test(tagName));
}


export const traverse = (html: string, handlers: HTMLTraverseHandlers = {
  childHandler: () => { },
  parentHandler: () => { },
}): HTMLElement => {
  const root = new HTMLElement();
  // root.cache = createStore();

  let currentParent = root;

  let lastTextPosition = -1;
  let match: RegExpExecArray | null;

  const data = `<${FRAME_FLAG}>${html}</${FRAME_FLAG}>`;

  const dataEndPos = data.length - (FRAME_FLAG.length + 2);
  const frameFlagOffset = FRAME_FLAG.length + 2;

  const createRange = (startPos: number, endPos: number): [number, number] => [startPos - frameFlagOffset, endPos - frameFlagOffset];
  let abort = false;

  while ((match = MARKUP_PATTERN.exec(data))) {
    let { 0: matchText, 1: leadingSlash, 2: tagName, 3: attributes, 4: closingSlash } = match;
    const matchLength = matchText.length;
    // const tagStartPosition = MARKUP_PATTERN.lastIndex - matchLength;
    const tagEndPosition = MARKUP_PATTERN.lastIndex;

    lastTextPosition = MARKUP_PATTERN.lastIndex;

    if (tagName === FRAME_FLAG) continue;

    // Handle comments
    if (matchText[1] === '!') {

      continue;
    }

    /* -- Handle tag matching -- */
    // Fix tag casing if necessary
    tagName = tagName.toLowerCase?.() as unknown as TagName;


    // Handle opening tags (ie. <this> not </that>)
    if (!leadingSlash) {
      /* Populate attributes */
      const attrs: Record<string, string> = {};
      for (let attMatch; (attMatch = ATTRIBUTE_PATTERN.exec(attributes));) {
        const { 1: key, 2: val } = attMatch;
        const isQuoted = val[0] === `'` || val[0] === `"`;
        attrs[key.toLowerCase()] = isQuoted ? val.slice(1, val.length - 1) : val;
      }

      const parentTagName = currentParent.tagName;

      if (!closingSlash && parentTagName && parentTagName in ELEMENTS_CLOSED_BY_OPENINGS) {
        if ((ELEMENTS_CLOSED_BY_OPENINGS as any)[parentTagName]?.[tagName]) {
          currentParent = currentParent.parentElement as HTMLElement;
        }
      }

      const tagEndPosition = MARKUP_PATTERN.lastIndex;
      const tagStartPosition = tagEndPosition - matchLength;

      const child = new HTMLElement(tagName as TagName, attrs, createRange(tagStartPosition, tagEndPosition));
      child.parentElement = currentParent;
      // child.cache = currentParent.cache;

      // prevent running stepper and doing more unnecessary work

      currentParent.appendChild(child);
      currentParent = child;


      if (isTextElement(tagName)) {
        // Find closing tag
        const closeMarkup = `</${tagName}>`;
        const closeIndex = data.toLocaleLowerCase().indexOf(closeMarkup, MARKUP_PATTERN.lastIndex)
        const textEndPos = closeIndex === -1 ? dataEndPos : closeIndex;

        const text = data.substring(tagEndPosition, textEndPos);
        if (text.length > 0 && /\S/.test(text)) {
          currentParent.innerText = text;
        }
        if (closeIndex === -1) {
          lastTextPosition = MARKUP_PATTERN.lastIndex = data.length + 1;
        } else {
          lastTextPosition = MARKUP_PATTERN.lastIndex = closeIndex + closeMarkup.length;
          // Cause to be treated as self-closing, because no close found
          leadingSlash = '/';
        }
      }

      if (abort) break;
      handlers.childHandler?.(child, () => { abort = true })
    }

    // Handle closing tags or self-closed elements (ie </tag> or <br>)
    if (leadingSlash || closingSlash || (SELF_CLOSING_ELEMENTS as any)[tagName]) {
      while (true) {
        // console.log('currentParent.tagName', currentParent.tagName, tagName)
        if (currentParent.tagName === tagName) {
          // Update range end for closed tag
          (<[number, number]>currentParent.range)[1] = createRange(-1, Math.max(lastTextPosition, tagEndPosition))[1];
          currentParent = currentParent.parentElement as HTMLElement;
          handlers.parentHandler?.(currentParent, () => { abort = true })
          break;
        } else {
          const parentTagName = currentParent.tagName as 'li' | 'a' | 'b' | 'i' | 'p' | 'td' | 'th';
          // Trying to close current tag, and move on
          if (ELEMENTS_CLOSED_BY_CLOSING[parentTagName]) {
            if ((ELEMENTS_CLOSED_BY_CLOSING[parentTagName] as any)[tagName]) {

              currentParent = currentParent.parentElement as HTMLElement;
              handlers.parentHandler?.(currentParent, () => { abort = true })
              continue;
            }
          }
          // Use aggressive strategy to handle unmatching markups.
          break;
        }
      }
    }


  }

  return root;
};
