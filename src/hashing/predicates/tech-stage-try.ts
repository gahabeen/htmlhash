import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.stagetry\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'stage_cart_change_events'),
    matchRegexInInnerHTML('script', 'stage_cart_total_price'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
