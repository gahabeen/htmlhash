import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'swell.version'),
    // in meta

    // in scripts

    // in html
    matchRegex('<[^>]*swell\\.is'),
    matchRegex('<[^>]*swell\\.store'),
    matchRegex('<[^>]*schema\\.io'),
    // in text

    // in css
])
