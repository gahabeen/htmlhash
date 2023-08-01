import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//return-prime-proxy-prod\\.s3[^ ]*\\.amazonaws\\.com/'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
