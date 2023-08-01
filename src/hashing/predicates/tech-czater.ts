import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.czater\\.pl'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '$czater'),
    matchRegexInInnerHTML('script', '$czaterMethods'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
