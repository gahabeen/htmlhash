import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'jscharts.{0,32}\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'JSChart'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
