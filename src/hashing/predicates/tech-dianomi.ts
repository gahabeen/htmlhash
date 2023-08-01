import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.dianomi\\.com/'),
    // in dom
    matchSelector(`iframe[src*='.dianomi.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
