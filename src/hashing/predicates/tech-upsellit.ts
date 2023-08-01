import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'www\\.upsellit\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'usi_analytics'),
    matchRegexInInnerHTML('script', 'usi_app'),
    matchRegexInInnerHTML('script', 'usi_commons'),
    matchRegexInInnerHTML('script', 'usi_cookies'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
