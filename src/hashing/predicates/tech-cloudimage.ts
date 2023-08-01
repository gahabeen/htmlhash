import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='.cloudimg.io/'], link[href*='.cloudimg.io/'], amp-img[src*='.cloudimg.io/']`),
    // in js
    matchRegexInInnerHTML('script', 'ciResponsive.config.domain'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
