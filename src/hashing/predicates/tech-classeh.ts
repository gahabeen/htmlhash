import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='apps.classeh.ir'][target='_blank']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'author', '^fanavar\\.org$'),
    // in scripts

    // in html

    // in text

    // in css
])
