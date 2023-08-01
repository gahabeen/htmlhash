import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.quantserve\\.com/quant\\.js'),
    // in dom
    matchSelector(`link[href*='.quantserve.com']`),
    // in js
    matchRegexInInnerHTML('script', 'quantserve'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
