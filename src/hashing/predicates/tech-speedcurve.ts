import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.speedcurve\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'LUX.version'),
    matchRegexInInnerHTML('script', 'LUX_t_end'),
    matchRegexInInnerHTML('script', 'LUX_t_start'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
