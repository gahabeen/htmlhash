import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'app\\.purechat\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PCWidget'),
    matchRegexInInnerHTML('script', 'purechatApi'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
