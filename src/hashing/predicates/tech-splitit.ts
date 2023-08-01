import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.production\\.splitit\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Splitit'),
    matchRegexInInnerHTML('script', 'wc_ga_pro.available_gateways.splitit'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
