import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'widget\\.pico\\.tools'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Pico'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
