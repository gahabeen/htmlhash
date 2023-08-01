import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.sendpulse\\.com/'),
    // in dom
    matchSelector(`link[href*='.sendpulse.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
