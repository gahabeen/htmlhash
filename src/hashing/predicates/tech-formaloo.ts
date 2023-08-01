import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//formaloo\\.net/'),
    // in dom
    matchSelector(`iframe[src*='//formaloo.net/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
