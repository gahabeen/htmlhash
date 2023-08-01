import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'ProgId', '^Publisher\\.'),
    matchRegexInAttribute('meta', 'generator', 'Microsoft Publisher( [\\d.]+)?\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('(?:<html [^>]*xmlns:w="urn:schemas-microsoft-com:office:publisher"|<!--[if pub]><xml>)'),
    // in text

    // in css
])
