import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.sift(?:science)?\\.com/s\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__siftFlashCB'),
    matchRegexInInnerHTML('script', '_sift'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
