import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'application-name', 'Misskey'),
    // in scripts

    // in html
    matchRegex('<!-- Thank you for using Misskey! @syuilo -->'),
    // in text

    // in css
])
