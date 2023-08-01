import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.bounceexchange\\.com'),
    matchRegexInAttribute('script', 'src', '\\.smarterhq\\.io/'),
    // in dom
    matchSelector(`link[href*='.smarterhq.io']`),
    // in js
    matchRegexInInnerHTML('script', 'bouncex'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
