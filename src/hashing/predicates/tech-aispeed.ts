import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'aispeed\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'aispeed_init'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
