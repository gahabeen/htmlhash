import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'kendo'),
    matchRegexInInnerHTML('script', 'kendo.version'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]*\\s+href=[^>]*styles/kendo\\.common(?:\\.min)?\\.css[^>]*/>'),
    // in text

    // in css
])
