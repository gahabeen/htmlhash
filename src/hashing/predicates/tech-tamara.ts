import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.tamara\\.co'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'TamaraProductWidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
