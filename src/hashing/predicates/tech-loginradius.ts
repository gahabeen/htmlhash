import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.loginradius\\.com'),
    matchRegexInAttribute('script', 'src', '\\.lrcontent\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'LoginRadius'),
    matchRegexInInnerHTML('script', 'LoginRadiusDefaults'),
    matchRegexInInnerHTML('script', 'LoginRadiusSDK'),
    matchRegexInInnerHTML('script', 'LoginRadiusUtility'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
