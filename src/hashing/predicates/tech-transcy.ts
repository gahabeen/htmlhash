import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '_transcy'),
    matchRegexInInnerHTML('script', 'transcy_apiURI'),
    matchRegexInInnerHTML('script', 'transcy_shopifyLocales'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
