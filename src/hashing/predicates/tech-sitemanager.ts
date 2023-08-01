import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 's\\d+\\.sitemn\\.gr/'),
    // in dom
    matchSelector(`link[href*='.sitemn.gr/']`),
    // in js
    matchRegexInInnerHTML('script', 'SM_CookiesModal'),
    matchRegexInInnerHTML('script', 'SM_Modal'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
