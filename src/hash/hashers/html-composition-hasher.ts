import * as datasets from '../../datasets';
import { HTMLElement } from '../../parse/html';
import { Attribute, Count, Index, Tag } from '../../types';
import { averageValue } from '../../utils';
import { FeaturesDictionnary } from '../generics/features-dictionnary';
import { HTMLHasher } from '../generics/html-hasher';

export const features = {
  avgOfTag: {
    prefix: 'avg-of-tag',
    name({ tag }: { tag: Tag }) { return [this.prefix, tag].join('|') },
    parse: (name: string) => ({ tag: name.split('|').pop() })
  },
  avgOfAttribute: {
    prefix: 'avg-of-attribute',
    name({ attribute }: { attribute: Attribute }) { return [this.prefix, attribute].join('|') },
    parse: (name: string) => ({ attribute: name.split('|').pop() })
  },
  avgOfTagParentOfTag: {
    prefix: 'avg-of-tag-parent-of-tag',
    name({ parentTag, tag }: { parentTag: Tag, tag: Tag }) { return [this.prefix, parentTag, tag].join('|') },
    parse: (name: string) => {
      const [tag, parentTag] = name.split('|').reverse();
      return { parentTag, tag };
    }
  },
  avgOfTagDirectParentOfTag: {
    prefix: 'avg-of-tag-direct-parent-of-tag',
    name({ parentTag, tag }: { parentTag: Tag, tag: Tag }) { return [this.prefix, parentTag, tag].join('|') },
    parse: (name: string) => {
      const [tag, parentTag] = name.split('|').reverse();
      return { parentTag, tag };
    }
  },
  avgOfTagSiblingOfTag: {
    prefix: 'avg-of-tag-sibling-of-tag',
    name({ siblingTag, tag }: { siblingTag: Tag, tag: Tag }) { return [this.prefix, siblingTag, tag].join('|') },
    parse: (name: string) => {
      const [tag, siblingTag] = name.split('|').reverse();
      return { siblingTag, tag };
    }
  },
  avgOfSiblingsPerTag: {
    prefix: 'avg-of-siblings-per-tag',
    name({ tag }: { tag: Tag }) { return [this.prefix, tag].join('|') },
    parse: (name: string) => ({ tag: name.split('|').pop() })
  },
  avgOfSameSiblingsPerTag: {
    prefix: 'avg-of-same-siblings-per-tag',
    name({ tag }: { tag: Tag }) { return [this.prefix, tag].join('|') },
    parse: (name: string) => ({ tag: name.split('|').pop() })

  },
  avgOfParentsPerTag: {
    prefix: 'avg-of-parents-per-tag',
    name({ tag }: { tag: Tag }) { return [this.prefix, tag].join('|') },
    parse: (name: string) => ({ tag: name.split('|').pop() })
  },
  avgOfAttributesPerTag: {
    prefix: 'avg-of-attributes-per-tag',
    name({ tag }: { tag: Tag }) { return [this.prefix, tag].join('|') },
    parse: (name: string) => ({ tag: name.split('|').pop() })
  },
  avgOfTagsWithAttribute: {
    prefix: 'avg-of-tags-with-attribute',
    name() { return this.prefix },
  },
  avgOfTagsWithClass: {
    prefix: 'avg-of-tags-with-class',
    name() { return this.prefix },
  },
  avgOfTagsWithId: {
    prefix: 'avg-of-tags-with-id',
    name() { return this.prefix },
  },
  avgOfTagsWithData: {
    prefix: 'avg-of-tags-with-data',
    name() { return this.prefix },
  },
  // --
  distributionOfTag: {
    prefix: 'distribution-of-tag',
    name({ tag }: { tag: Tag }) { return [this.prefix, tag].join('|') },
    parse: (name: string) => ({ tag: name.split('|').pop() })
  },
  distributionOfTagParentOfTag: {
    prefix: 'distribution-of-tag-parent-of-tag',
    name({ parentTag, tag }: { parentTag: Tag, tag: Tag }) { return [this.prefix, parentTag, tag].join('|') },
    parse: (name: string) => {
      const [tag, parentTag] = name.split('|').reverse();
      return { parentTag, tag };
    }
  },
  distributionOfTagDirectParentOfTag: {
    prefix: 'distribution-of-tag-direct-parent-of-tag',
    name({ parentTag, tag }: { parentTag: Tag, tag: Tag }) { return [this.prefix, parentTag, tag].join('|') },
    parse: (name: string) => {
      const [tag, parentTag] = name.split('|').reverse();
      return { parentTag, tag };
    }
  },
  distributionOfTagSiblingOfTag: {
    prefix: 'distribution-of-tag-sibling-of-tag',
    name({ siblingTag, tag }: { siblingTag: Tag, tag: Tag }) { return [this.prefix, siblingTag, tag].join('|') },
    parse: (name: string) => {
      const [tag, siblingTag] = name.split('|').reverse();
      return { siblingTag, tag };
    }
  },
  distributionOfAttribute: {
    prefix: 'distribution-of-attribute',
    name({ attribute }: { attribute: Attribute }) { return [this.prefix, attribute].join('|') },
    parse: (name: string) => ({ attribute: name.split('|').pop() })
  },
  // --
  avgPositionOfAttribute: {
    prefix: 'avg-position-of-attribute',
    name({ attribute }: { attribute: Attribute }) { return [this.prefix, attribute].join('|') },
    parse: (name: string) => ({ attribute: name.split('|').pop() })
  },
}

export class HTMLCompositionFeaturesDictionnary extends FeaturesDictionnary {

  constructor({ attributes, tags }: { attributes: string[], tags: string[] } = { attributes: datasets.attributes, tags: datasets.tags }) {
    super();

    for (const attribute of attributes) {
      this.add(features.avgOfAttribute.name({ attribute }));
      this.add(features.distributionOfAttribute.name({ attribute }));
      this.add(features.avgPositionOfAttribute.name({ attribute }));
    }

    for (const tag of tags) {
      this.add(features.avgOfTag.name({ tag }));
      this.add(features.avgOfSiblingsPerTag.name({ tag }));
      this.add(features.avgOfSameSiblingsPerTag.name({ tag }));
      this.add(features.avgOfParentsPerTag.name({ tag }));

      this.add(features.avgOfAttributesPerTag.name({ tag }));

      this.add(features.distributionOfTag.name({ tag }));

      for (const otherTag of tags) {
        this.add(features.avgOfTagParentOfTag.name({ tag, parentTag: otherTag }));
        this.add(features.avgOfTagDirectParentOfTag.name({ tag, parentTag: otherTag }));
        this.add(features.avgOfTagSiblingOfTag.name({ tag, siblingTag: otherTag }));

        this.add(features.distributionOfTagParentOfTag.name({ tag, parentTag: otherTag }));
        this.add(features.distributionOfTagDirectParentOfTag.name({ tag, parentTag: otherTag }));
        this.add(features.distributionOfTagSiblingOfTag.name({ tag, siblingTag: otherTag }));
      }
    }
  }
}

// Use default tags / attributes in HTML as features

export class HTMLCompositionHasher extends HTMLHasher {
  contextCounters!: Record<string, number>;
  positionRatioOfAttributes!: Map<Attribute, number[]>;

  counters!: Map<string, Count>;
  indexes!: Map<string, Index[]>;

  dictionnary: FeaturesDictionnary

  constructor(dictionnary: HTMLCompositionFeaturesDictionnary = new HTMLCompositionFeaturesDictionnary()) {
    super();
    this.reset();
    this.dictionnary = dictionnary;
  }

  reset() {
    this.values = new Map<string, number>();

    this.contextCounters = {
      tags: 0,
      attributes: 0,
      children: 0,
      parentChildRelations: 0,
      directParentChildRelations: 0,
      siblingsRelations: 0,
      maxParents: 0,
      maxSiblings: 0,
      maxAttributes: 0,
    };

    this.positionRatioOfAttributes = new Map<Attribute, number[]>();

    this.counters = new Map<string, Count>();
    this.indexes = new Map<string, Index[]>();

    return this;
  }

  index(key: string) {
    this.indexes.get(key)?.push(this.contextCounters.tags) || this.indexes.set(key, [this.contextCounters.tags]);
  }

  increment(key: string, increment = 1) {
    this.counters.set(key, (this.counters.get(key) || 0) + increment);
  }

  childHandler(child: HTMLElement) {
    this.contextCounters.tags++;

    const tagName = child.tagName;

    this.index(features.avgOfTag.name({ tag: tagName }));

    const parentsCount = child.parentElements().length;
    if (parentsCount) {
      this.increment(features.avgOfParentsPerTag.name({ tag: tagName }), parentsCount)
      if (this.contextCounters.maxParents < parentsCount) this.contextCounters.maxParents = parentsCount;

      for (const [parentIndex, parent] of Object.entries(child.parentElements())) {
        const parentTagName = parent.tagName;

        if (parentIndex === '0') {
          this.index(features.avgOfTagDirectParentOfTag.name({ tag: tagName, parentTag: parentTagName }))
        }

        this.index(features.avgOfTagParentOfTag.name({ tag: tagName, parentTag: parentTagName }))
      }
    }

    const attributesKeys = child.attributesKeys();
    if (attributesKeys.length) {
      if (this.contextCounters.maxAttributes < attributesKeys.length) this.contextCounters.maxAttributes = attributesKeys.length;

      this.index(features.avgOfTagsWithAttribute.name());
      this.contextCounters.attributes += attributesKeys.length;
      this.increment(features.avgOfAttributesPerTag.name({ tag: tagName }), attributesKeys.length)
      // if(tagName === 'span') {
      //   console.log(this.counters.get(features.avgOfAttributesPerTag.name({ tag: 'span' })))
      // }

      for (const [position, attribute] of Object.entries(attributesKeys)) {
        this.index(features.avgOfAttribute.name({ attribute }))
        this.positionRatioOfAttributes.get(attribute)?.push(+position / attributesKeys.length) || this.positionRatioOfAttributes.set(attribute, [+position / attributesKeys.length]);
      }

      if (child.attributes?.class) {
        this.index(features.avgOfTagsWithClass.name());
      }

      if (child.attributes?.id) {
        this.index(features.avgOfTagsWithId.name());
      }

      if (attributesKeys?.some(k => k.startsWith('data-'))) {
        this.index(features.avgOfTagsWithData.name())
      }
    }
  };

  parentHandler(parent: HTMLElement) {
    const children = parent.childElements;

    if (children.length > 1) {
      this.contextCounters.parentChildRelations += (children.length * (parent.parentElements().length + 1));
      this.contextCounters.directParentChildRelations += children.length;
      this.contextCounters.siblingsRelations += (children.length * (children.length - 1));

      if (this.contextCounters.maxSiblings < children.length) this.contextCounters.maxSiblings = children.length;
      this.contextCounters.children += children.length;

      let localSiblingsCounter: Record<any, number> = {};
      for (const child of children) {
        const tagName: string = child.tagName;
        localSiblingsCounter[tagName] = (localSiblingsCounter[tagName] || 0) + 1;

        // count siblings per tag
        this.increment(features.avgOfSiblingsPerTag.name({ tag: tagName }), children.length - 1)
      }

      // count siblings with same tag
      for (const [tagName, siblingsCount] of Object.entries(localSiblingsCounter)) {
        this.increment(features.avgOfSameSiblingsPerTag.name({ tag: tagName }), siblingsCount)

        // count siblings of tag
        for (const siblingTag of Object.keys(localSiblingsCounter)) {
          if (siblingTag === tagName) continue;
          this.index(features.avgOfTagSiblingOfTag.name({ tag: tagName, siblingTag }))
        }
      }

    }
  };

  compute() {
    if (this.values?.size) return this.values;

    for (const [key, value] of this.indexes) {
      if ([
        features.avgOfTag.prefix,
      ].some(prefix => key.startsWith(prefix))) {
        // value as indexes
        this.values.set(key, value.length / this.contextCounters.tags)
        const { tag } = features.distributionOfTag.parse(key);
        if (tag) {
          this.values.set(features.distributionOfTag.name({ tag }), averageValue(value) / this.contextCounters.tags)
        }
        continue;
      }

      if ([
        features.avgOfAttribute.prefix,
      ].some(prefix => key.startsWith(prefix))) {
        // value as indexes
        this.values.set(key, value.length / this.contextCounters.attributes)
        const { attribute } = features.distributionOfAttribute.parse(key);
        if (attribute) {
          this.values.set(features.distributionOfAttribute.name({ attribute }), averageValue(value) / this.contextCounters.tags)
        }
        continue;
      }

      if ([
        features.avgOfTagsWithAttribute.prefix,
        features.avgOfTagsWithClass.prefix,
        features.avgOfTagsWithId.prefix,
        features.avgOfTagsWithData.prefix,
      ].some(prefix => key.startsWith(prefix))) {
        // value as indexes
        this.values.set(key, value.length / this.contextCounters.tags)
        continue;
      }

      if ([
        features.avgOfTagParentOfTag.prefix,
      ].some(prefix => key.startsWith(prefix))) {
        // value as indexes
        this.values.set(key, value.length / this.contextCounters.parentChildRelations)
        const { tag, parentTag } = features.distributionOfTagParentOfTag.parse(key);
        this.values.set(features.distributionOfTagParentOfTag.name({ parentTag, tag }), averageValue(value) / this.contextCounters.tags);
        continue;
      }

      if ([
        features.avgOfTagDirectParentOfTag.prefix,
      ].some(prefix => key.startsWith(prefix))) {
        // value as indexes
        this.values.set(key, value.length / this.contextCounters.directParentChildRelations)
        const { tag, parentTag } = features.distributionOfTagDirectParentOfTag.parse(key);
        this.values.set(features.distributionOfTagDirectParentOfTag.name({ parentTag, tag }), averageValue(value) / this.contextCounters.tags);
        continue;
      }

      if ([
        features.avgOfTagSiblingOfTag.prefix,
      ].some(prefix => key.startsWith(prefix))) {
        // value as indexes
        this.values.set(key, value.length / this.contextCounters.siblingsRelations)
        const { tag, siblingTag } = features.distributionOfTagSiblingOfTag.parse(key);
        this.values.set(features.distributionOfTagSiblingOfTag.name({ siblingTag, tag }), averageValue(value) / this.contextCounters.tags);
        continue;
      }
    }

    for (const [key, count] of this.counters) {
      if ([
        features.avgOfParentsPerTag.prefix
      ].some(prefix => key.startsWith(prefix))) {
        // value as count number
        const { tag } = features.avgOfTag.parse(key);
        if (tag) {
          const specificTagCount = this.indexes.get(features.avgOfTag.name({ tag }))?.length || 1;
          this.values.set(key, (count / specificTagCount) / this.contextCounters.maxParents)
        }
        continue;
      }


      if ([
        features.avgOfAttributesPerTag.prefix,
      ].some(prefix => key.startsWith(prefix))) {
        // value as count number
        const { tag } = features.avgOfTag.parse(key);
        if (tag) {
          const specificTagCount = this.indexes.get(features.avgOfTag.name({ tag }))?.length || 1;
          this.values.set(key, (count / specificTagCount) / this.contextCounters.maxAttributes);
        };
        continue;
      }

      if ([
        features.avgOfSiblingsPerTag.prefix,
      ].some(prefix => key.startsWith(prefix))) {
        // value as count number
        const { tag } = features.avgOfTag.parse(key);
        if (tag) {
          const specificTagCount = this.indexes.get(features.avgOfTag.name({ tag }))?.length || 1;
          this.values.set(key, (count / specificTagCount) / this.contextCounters.maxSiblings);
        };
        continue;
      }

      if ([
        features.avgOfSameSiblingsPerTag.prefix,
      ].some(prefix => key.startsWith(prefix))) {
        // value as count number
        this.values.set(key, (count / this.contextCounters.children));
        continue;
      }

    }

    for (const [attribute, positions] of this.positionRatioOfAttributes) {
      this.values.set(features.avgPositionOfAttribute.name({ attribute }), averageValue(positions));
    }

    return this.values;
  }
}