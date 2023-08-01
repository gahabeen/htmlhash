import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.moshimo\\.com/af/'),
    // in dom
    matchSelector(`link[href*='i.moshimo.com'], img[src*='i.moshimo.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
