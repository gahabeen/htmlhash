import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'XF.GuestUsername'),
    // in meta

    // in scripts

    // in html
    matchRegex('(?:jQuery\\.extend\\(true, XenForo|<a[^>]+>Forum software by XenForo™|<!--XF:branding|<html[^>]+id="XenForo")'),
    matchRegex('<html id="XF" '),
    // in text

    // in css
])
