import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'www\\.clarity\\.ms/.+/([\\d.]+)/clarity\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'clarity'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
