import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`iframe[scr*='.pardot.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'piAId'),
    matchRegexInInnerHTML('script', 'piCId'),
    matchRegexInInnerHTML('script', 'piHostname'),
    matchRegexInInnerHTML('script', 'piProtocol'),
    matchRegexInInnerHTML('script', 'piTracker'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
