import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'gw_backend_url'),
    matchRegexInInnerHTML('script', 'gw_waitlist_name'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
