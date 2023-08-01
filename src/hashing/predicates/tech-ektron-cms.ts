import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/ektron\\.javascript\\.ashx'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Ektron'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
