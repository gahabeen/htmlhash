import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.shopify\\.com/.+/assets/hs-(?:instantload|lazysizes)\\.min\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'hyperscripts'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
