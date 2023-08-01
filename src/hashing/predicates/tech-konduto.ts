import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.k-analytix\\.com'),
    // in dom
    matchSelector(`link[href*='.konduto.com']`),
    // in js
    matchRegexInInnerHTML('script', 'Konduto'),
    matchRegexInInnerHTML('script', 'getKondutoID'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
