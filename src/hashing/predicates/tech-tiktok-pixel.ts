import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`script[data-hid='tiktok']`),
    // in js
    matchRegexInInnerHTML('script', 'TiktokAnalyticsObject'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
