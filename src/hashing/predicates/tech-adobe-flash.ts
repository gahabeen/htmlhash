import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`object[type='application/x-shockwave-flash']`),
    matchSelector(`param[value*='.swf']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
