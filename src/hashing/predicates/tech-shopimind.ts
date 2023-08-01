import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '_spmq.id_cart'),
    matchRegexInInnerHTML('script', '_spmq.spm_ident'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
