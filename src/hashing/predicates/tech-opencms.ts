import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'opencms'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link href="/opencms/'),
    // in text

    // in css
])
