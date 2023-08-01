import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^Mobirise v([\\d.]+)\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('<!-- Site made with Mobirise Website Builder v([\\d.]+)\\;version:\\1'),
    // in text

    // in css
])
