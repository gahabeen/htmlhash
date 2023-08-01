import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'levARActivationHelper'),
    matchRegexInInnerHTML('script', 'levar.session_info'),
    matchRegexInInnerHTML('script', 'levar_onload_variant_id'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
