import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'coremedia_content_id', ''),
    matchRegexInAttribute('meta', 'generator', '^CoreMedia C(?:ontent Cloud|MS)$'),
    // in scripts

    // in html

    // in text

    // in css
])
