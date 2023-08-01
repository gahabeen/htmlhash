import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='//js\.api\.here\.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'H.buildInfo'),
    matchRegexInInnerHTML('script', 'H.geo'),
    matchRegexInInnerHTML('script', 'H.util'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
