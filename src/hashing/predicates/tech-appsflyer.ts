import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'websdk\\.appsflyer\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AppsFlyerSdkObject'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
