import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'googletagmanager\\.com/gtm\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'googletag'),
    // in meta

    // in scripts

    // in html
    matchRegex('googletagmanager\\.com/ns\\.html[^>]+></iframe>'),
    matchRegex('<!-- (?:End )?Google Tag Manager -->'),
    // in text

    // in css
])
