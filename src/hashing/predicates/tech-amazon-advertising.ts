import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.amazon-adsystem\\.com'),
    // in dom
    matchSelector(`iframe[src*='.amazon-adsystem.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
