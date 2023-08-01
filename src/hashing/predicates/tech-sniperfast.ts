import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.sniperfast\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'sniperEnableSearch'),
    matchRegexInInnerHTML('script', 'sniper_search_key'),
    matchRegexInInnerHTML('script', 'sniperfast_page_id'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
