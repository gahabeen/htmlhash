import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='/npm/vant']`),
    // in js
    matchRegexInInnerHTML('script', 'vant.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
