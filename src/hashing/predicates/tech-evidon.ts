import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.evidon\\.com/'),
    // in dom
    matchSelector(`a[href*='info.evidon.com/pub_info/']`),
    // in js
    matchRegexInInnerHTML('script', 'EB.EvidonConsent'),
    matchRegexInInnerHTML('script', 'evidon'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
