import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.optimove\\.net/.+v([\\d\\.]+)\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'optimoveSDK'),
    matchRegexInInnerHTML('script', 'optimoveSDKVersion'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
