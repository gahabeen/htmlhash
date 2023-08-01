import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'snapwidget\\.com/'),
    // in dom
    matchSelector(`iframe[src*='snapwidget.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
