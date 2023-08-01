import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.bambuser\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BambuserLiveShopping'),
    matchRegexInInnerHTML('script', '_bambuser'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
