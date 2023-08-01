import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ecomPassport.storageKey'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^E-Com\\sPlus\\sStorefront$'),
    // in scripts

    // in html

    // in text

    // in css
])
