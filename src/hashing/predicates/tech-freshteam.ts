import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'assets\\.freshteam\\.com/'),
    // in dom
    matchSelector(`a[href*='.freshteam.com/jobs']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
