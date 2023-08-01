import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 's_c_il.0._c'),
    matchRegexInInnerHTML('script', 's_c_il.1._c'),
    matchRegexInInnerHTML('script', 's_c_il.2._c'),
    matchRegexInInnerHTML('script', 's_c_il.3._c'),
    matchRegexInInnerHTML('script', 's_c_il.4._c'),
    matchRegexInInnerHTML('script', 's_c_il.5._c'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
