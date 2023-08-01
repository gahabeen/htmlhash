import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?!cdn-loyalty)\\.yotpo\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'yotpo'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
