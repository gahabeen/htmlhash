import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.modules4u\\.biz/shopify/exemptify'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ExemptifyTriggerUpdate'),
    matchRegexInInnerHTML('script', 'm4u_ex_vat_postfix_txt'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
