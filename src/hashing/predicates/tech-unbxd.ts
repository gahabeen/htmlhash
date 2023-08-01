import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.cloudfront\\.net/unbxdAnalytics\\.js'),
    matchRegexInAttribute('script', 'src', 'unbxd\\.s\\d\\.amazonaws\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Unbxd.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
