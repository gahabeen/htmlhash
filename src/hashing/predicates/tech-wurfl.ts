import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.wurfl\\.io'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'WURFL'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
