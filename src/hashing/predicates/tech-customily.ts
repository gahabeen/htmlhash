import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:cdn|app)\\.customily\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'customily.sticky'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
