import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.sharethis\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SHARETHIS'),
    matchRegexInInnerHTML('script', '__sharethis__docReady'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
