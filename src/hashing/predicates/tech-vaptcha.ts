import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.vaptcha\\.com/v([\\d\\.]+)\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'vaptcha'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
