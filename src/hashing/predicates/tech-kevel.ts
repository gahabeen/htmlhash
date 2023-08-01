import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'adzerk\\.net/'),
    // in dom
    matchSelector(`iframe[src*='adzerk.net'], link[href*='adzerk.net']`),
    // in js
    matchRegexInInnerHTML('script', 'ados'),
    matchRegexInInnerHTML('script', 'adosResults'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
