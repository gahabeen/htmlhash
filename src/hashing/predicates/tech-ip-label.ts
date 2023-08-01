import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'clobs\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'clobs'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
