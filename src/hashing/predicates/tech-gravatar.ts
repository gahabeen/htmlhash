import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Gravatar'),
    // in meta

    // in scripts

    // in html
    matchRegex('<[^>]+gravatar\\.com/avatar/'),
    // in text

    // in css
])
