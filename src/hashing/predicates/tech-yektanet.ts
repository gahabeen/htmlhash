import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'yektanet'),
    // in meta
    matchRegexInAttribute('meta', 'yektanet_session_last_activity', ''),
    // in scripts

    // in html

    // in text

    // in css
])
