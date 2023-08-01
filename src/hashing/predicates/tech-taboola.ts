import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.taboola\\.com'),
    // in dom
    matchSelector(`link[href*='.taboola.com']`),
    // in js
    matchRegexInInnerHTML('script', '_taboola'),
    matchRegexInInnerHTML('script', 'TRCImpl.global'),
    matchRegexInInnerHTML('script', 'taboola_view_id'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
