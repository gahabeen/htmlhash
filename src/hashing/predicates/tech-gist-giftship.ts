import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'assets/js/giftship\\.([\\d\\.]+)\\.js\\;version:\\1'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
