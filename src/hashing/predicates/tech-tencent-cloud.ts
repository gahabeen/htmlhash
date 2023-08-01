import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.tencent-cloud\\.(?:cn|com)/'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'copyright', '^.+Tencent\\sCloud\\.$'),
    // in scripts

    // in html

    // in text

    // in css
])
