import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='.centracdn.net/']`),
    // in js
    matchRegexInInnerHTML('script', 'CENTRA_IMAGE_SIZES'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'centraCheckoutScript'),
    // in html

    // in text

    // in css
])
