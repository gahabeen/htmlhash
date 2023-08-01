import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'statics\\.a8\\.net'),
    // in dom
    matchSelector(`img[src*='.a8.net']`),
    // in js
    matchRegexInInnerHTML('script', 'A8salesCookieRepository'),
    matchRegexInInnerHTML('script', 'a8sales'),
    matchRegexInInnerHTML('script', 'map_A8'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
