import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'IsOwaPremiumBrowser'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+/owa/auth/([\\d\\.]+)/themes/resources\\;version:\\1'),
    // in text

    // in css
])
