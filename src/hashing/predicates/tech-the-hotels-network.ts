import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.thehotelsnetwork\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'thn.data.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
