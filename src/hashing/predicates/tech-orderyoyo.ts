import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.orderyoyo.com/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'SmartBannerOY'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
