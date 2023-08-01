import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.flocktory\\.com/'),
    // in dom
    matchSelector(`iframe[src*='.flocktory.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'flocktory'),
    matchRegexInInnerHTML('script', 'flocktoryPurchase'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
