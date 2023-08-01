import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.lkqd\\.net'),
    // in dom
    matchSelector(`iframe[src*='.lkqd.net']`),
    // in js
    matchRegexInInnerHTML('script', 'lkqdCall'),
    matchRegexInInnerHTML('script', 'lkqdErrorCount'),
    matchRegexInInnerHTML('script', 'lkqdSettings'),
    matchRegexInInnerHTML('script', 'lkqd_http_response'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
