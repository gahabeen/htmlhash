import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='//bookeo.com/'], iframe[src*='//bookeo.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'bookeo_start'),
    matchRegexInInnerHTML('script', 'bookeo_startMobileLabel'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
