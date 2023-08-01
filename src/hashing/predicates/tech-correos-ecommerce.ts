import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.mycorreosecommerce\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Comandia'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
