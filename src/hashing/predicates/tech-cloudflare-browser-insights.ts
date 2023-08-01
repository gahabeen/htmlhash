import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'static\\.cloudflareinsights\\.com/beacon(?:\\.min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__cfBeaconCustomTag'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
