import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.kustomerapp\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Kustomer'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
