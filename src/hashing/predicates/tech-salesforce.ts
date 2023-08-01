import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SFDCApp'),
    matchRegexInInnerHTML('script', 'SFDCCmp'),
    matchRegexInInnerHTML('script', 'SFDCPage'),
    matchRegexInInnerHTML('script', 'SFDCSessionVars'),
    // in meta

    // in scripts

    // in html
    matchRegex('<[^>]+="brandQuaternaryFgrs"'),
    // in text

    // in css
])
