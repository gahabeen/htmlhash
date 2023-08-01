import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.adverticum\\.net/'),
    // in dom
    matchSelector(`a[href*='ad.adverticum.net'], div.goAdverticum`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
