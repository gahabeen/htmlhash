import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.digitalriver\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'DigitalRiver'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
