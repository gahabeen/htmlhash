import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:api|sdk)\\.nextsale\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'NextsaleObject'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
