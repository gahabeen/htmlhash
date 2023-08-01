import fs from 'fs'
import path from 'path'

const predicatesFolder = path.join(__dirname, '../src/hashing/predicates')
const technologiesFolder = path.join(__dirname, './input/technologies')

function cleanRegexString(regexString: string) {
    // Escape solo forward slashes
    regexString = regexString.replace(/\\/g, '\\\\')
    regexString = regexString.replace(/(?<!\\)\/(?!\/)/g, '\\/')
    regexString = regexString.replace(/"/g, '\\"')

    return regexString
}

const getArray = (value: any) => {
    return (value ? (Array.isArray(value) ? value : typeof value === 'object' ? Object.keys(value) : [value]) : []).filter(Boolean)
}

for (const file of fs.readdirSync(technologiesFolder)) {
    const filePath = path.join(technologiesFolder, file)
    const items = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    for (const [key, value] of Object.entries<any>(items)) {
        const filePath = path.join(
            predicatesFolder,
            `tech-${key
                .toLocaleLowerCase()
                .replace(/[^a-z0-9]/g, '-')
                .replace(/\s+/, '-')}.ts`
        )

        const scriptSrcArr = getArray(value.scriptSrc)
        const inAttribute = scriptSrcArr.map((pattern: string) => `matchRegexInAttribute("script", "src", "${cleanRegexString(pattern)}")`).join(',\n  ')

        const domArr = getArray(value.dom)
        const inDom = domArr.map((selector: string) => `matchSelector(\`${selector}\`)`).join(',\n  ')

        const jsArr = getArray(value.js)
        const inJs = jsArr.map((snippet: string) => `matchRegexInInnerHTML("script", "${cleanRegexString(snippet)}")`).join(',\n  ')

        const scriptsArr = getArray(value.scripts)
        const inScripts = scriptsArr.map((snippet: string) => `matchRegexInInnerHTML("script", "${cleanRegexString(snippet)}")`).join(',\n  ')

        const metaObj = value.meta || {}
        const inMeta = Object.entries(metaObj)
            .map(([key, value]) => {
                if (typeof value === 'string') {
                    return `matchRegexInAttribute("meta", "${key}", "${cleanRegexString(value)}")`
                } else if (Array.isArray(value)) {
                    return value.map((pattern: string) => `matchRegexInAttribute("meta", "${key}", "${cleanRegexString(pattern)}")`).join(',\n  ')
                }
            })
            .join(',\n  ')

        const html = getArray(value.html)
        const inHtml = html.map((snippet: string) => `matchRegex("${cleanRegexString(snippet)}")`).join(',\n  ')

        const text = getArray(value.text)
        const inText = text.map((snippet: string) => `matchRegex("${cleanRegexString(snippet)}")`).join(',\n  ')

        const css = getArray(value.css)
        const inCss = css.map((snippet: string) => `matchRegex("${cleanRegexString(snippet)}")`).join(',\n  ')

        fs.writeFileSync(
            filePath,
            `import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from "../matchers";

export const predicate = anyOf([
  // in attribute
  ${inAttribute && inAttribute + ','}
  // in dom
  ${inDom && inDom + ','}
  // in js
  ${inJs && inJs + ','}
  // in meta
  ${inMeta && inMeta + ','}
  // in scripts
  ${inScripts && inScripts + ','}
  // in html
  ${inHtml && inHtml + ','}
  // in text
  ${inText && inText + ','}
  // in css
  ${inCss && inCss + ','}
])`
        )
    }
}
