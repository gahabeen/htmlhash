import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.admixer\\.net/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'admixerAds'),
    matchRegexInInnerHTML('script', 'admixerML'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
