import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.feefo\\.com/'),
    // in dom
    matchSelector(`a[href*='.feefo.com/'][target='_blank'], link[href*='.feefo.com/'], img[src*='.feefo.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'feefoTracker'),
    matchRegexInInnerHTML('script', 'feefoWidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
