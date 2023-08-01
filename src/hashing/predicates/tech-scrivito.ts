import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Scrivito'),
    matchRegexInInnerHTML('script', 'scrivito'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^Scrivito\\sby\\sInfopark\\sAG\\s\\(scrivito\\.com\\)$'),
    // in scripts

    // in html

    // in text

    // in css
])
