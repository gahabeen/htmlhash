import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.kindful.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'Bloomerang.version'),
    matchRegexInInnerHTML('script', 'KindfulPaymentsConnect'),
    matchRegexInInnerHTML('script', 'bloomerangLoadStarted'),
    matchRegexInInnerHTML('script', 'kindful_gtag'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
