import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.luckyorange\\.com/'),
    // in dom
    matchSelector(`link[href*='.luckyorange.com']`),
    // in js
    matchRegexInInnerHTML('script', '__wtw_lucky_site_id'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
