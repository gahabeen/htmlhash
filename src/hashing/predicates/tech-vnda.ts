import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Vnda.loadCartPopup'),
    matchRegexInInnerHTML('script', 'vnda.checkout'),
    // in meta
    matchRegexInAttribute('meta', 'image', 'cdn\\.vnda\\.com\\.br/'),
    // in scripts

    // in html

    // in text

    // in css
])
