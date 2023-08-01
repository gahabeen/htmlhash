import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'dfm_viafoura_options'),
    matchRegexInInnerHTML('script', 'viafoura.bootstrap'),
    matchRegexInInnerHTML('script', 'viafoura.core'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
