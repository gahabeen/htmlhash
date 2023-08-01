import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'scrollreveal(?:\\.min)(?:\\.js)'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<[^>]+data-sr(?:-id)'),
    // in text

    // in css
])
