import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.adsrvr\\.org/'),
    // in dom
    matchSelector(`iframe[src*='insight.adsrvr.org']`),
    // in js
    matchRegexInInnerHTML('script', 'TTDUniversalPixelApi'),
    matchRegexInInnerHTML('script', 'ttd_dom_ready'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
