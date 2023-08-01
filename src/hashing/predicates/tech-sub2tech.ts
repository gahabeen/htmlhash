import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.sub2tech\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SUB2.codebaseversion'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
