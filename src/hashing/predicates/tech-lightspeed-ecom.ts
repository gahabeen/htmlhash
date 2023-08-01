import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'http://assets\\.webshopapp\\.com'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex("<!-- \\[START\\] 'blocks/head\\.rain' -->"),
    // in text

    // in css
])
