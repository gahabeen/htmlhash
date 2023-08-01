import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/twikoo/dist/twikoo\\.all\\.min\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'twikoo.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
