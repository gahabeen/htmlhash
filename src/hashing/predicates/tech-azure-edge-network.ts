import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.azureedge\\.net/'),
    // in dom
    matchSelector(`link[href*='.azureedge.net/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
