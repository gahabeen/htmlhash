import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'npm/leanplum-sdk\\@([\\d.]+)\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Leanplum'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
