import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.anyclip\\.com'),
    // in dom
    matchSelector(`img[src*='.anyclip.com'], video[poster*='.anyclip.com']`),
    // in js
    matchRegexInInnerHTML('script', 'anyclip'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
