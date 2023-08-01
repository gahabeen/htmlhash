import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.everyaction\\.com/'),
    // in dom
    matchSelector(`a[href*='secure.everyaction.com/'], div[data-form-url*='secure.everyaction.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
