import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^Melis Platform\\.'),
    matchRegexInAttribute('meta', 'powered-by', '^Melis CMS\\.'),
    // in scripts

    // in html
    matchRegex('<!-- Rendered with Melis CMS V2'),
    matchRegex('<!-- Rendered with Melis Platform'),
    // in text

    // in css
])
