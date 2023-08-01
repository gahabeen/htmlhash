import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^https?://(?:www\\.)?projectwonderful\\.com/(?:pwa\\.js|gen\\.php)'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'pw_adloader'),
    // in meta

    // in scripts

    // in html
    matchRegex('<div[^>]+id="pw_adbox_'),
    // in text

    // in css
])
