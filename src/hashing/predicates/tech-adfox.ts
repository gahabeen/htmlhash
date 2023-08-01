import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AdFox_getCodeScript'),
    matchRegexInInnerHTML('script', 'Site.adFoxParams'),
    matchRegexInInnerHTML('script', 'adFoxParams'),
    matchRegexInInnerHTML('script', 'adfoxAsyncParams'),
    matchRegexInInnerHTML('script', 'adfoxBiddersMap'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
