import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^C1 CMS Foundation - Free Open Source from Orckestra and https://github.com/Orckestra/C1-CMS-Foundation$'),
    // in scripts

    // in html

    // in text

    // in css
])
