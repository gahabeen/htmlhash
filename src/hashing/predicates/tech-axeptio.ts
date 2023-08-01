import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='axeptio.imgix.net/']`),
    // in js
    matchRegexInInnerHTML('script', 'axeptioSDK'),
    matchRegexInInnerHTML('script', 'axeptioSettings'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
