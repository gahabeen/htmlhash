import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.tsyndicate\\.com/'),
    // in dom
    matchSelector(`img[src*='tsyndicate.com/'], a[href*='trafficstars.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
