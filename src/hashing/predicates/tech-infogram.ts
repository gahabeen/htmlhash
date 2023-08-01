import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`iframe[src*='.infogram.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'InfogramEmbeds'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
