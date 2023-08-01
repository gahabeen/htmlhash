import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'bookmenow\\.info/(?:runtime|main).+\\.js'),
    // in dom
    matchSelector(`a[href*='bookmenow.info/book']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
