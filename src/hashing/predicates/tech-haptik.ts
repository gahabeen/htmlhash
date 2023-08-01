import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.haptikapi\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'HaptikSDK'),
    matchRegexInInnerHTML('script', 'haptik'),
    matchRegexInInnerHTML('script', 'haptikInitSettings'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
