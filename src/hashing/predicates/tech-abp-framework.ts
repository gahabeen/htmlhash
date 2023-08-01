import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'abp.timing.timeZone'),
    matchRegexInInnerHTML('script', 'abp.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
