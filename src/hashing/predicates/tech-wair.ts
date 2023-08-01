import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'getwair\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PredictV3.default.version'),
    matchRegexInInnerHTML('script', 'predictWidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
