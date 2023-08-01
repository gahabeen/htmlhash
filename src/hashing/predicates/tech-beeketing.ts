import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'sdk\\.beeketing\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'beeketingAnalyticsParams'),
    matchRegexInInnerHTML('script', 'beeketingSDKLoaded'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
