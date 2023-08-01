import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'mollom(?:\\.min)?\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<img[^>]+\\.mollom\\.com'),
    // in text

    // in css
])
