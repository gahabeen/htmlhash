import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'sevenrooms\\.\\w+/widget/embed\\.js'),
    // in dom
    matchSelector(`iframe[src*='sevenrooms']`),
    // in js
    matchRegexInInnerHTML('script', 'SevenroomsWidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
