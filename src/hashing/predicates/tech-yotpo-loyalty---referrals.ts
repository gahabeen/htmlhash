import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn(?:-loyalty)?\\.(?:swellrewards|yotpo)\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SwellConfig'),
    matchRegexInInnerHTML('script', 'swellAPI'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
