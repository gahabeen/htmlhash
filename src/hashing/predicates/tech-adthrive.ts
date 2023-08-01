import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'ads\\.adthrive\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'adthrive'),
    matchRegexInInnerHTML('script', 'adthriveVideosInjected'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
