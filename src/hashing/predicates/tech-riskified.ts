import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'RISKX'),
    matchRegexInInnerHTML('script', 'riskifiedBeaconLoad'),
    // in meta

    // in scripts

    // in html
    matchRegex('<[^>]*beacon\\.riskified\\.com'),
    matchRegex('<[^>]*c\\.riskified\\.com'),
    // in text

    // in css
])
