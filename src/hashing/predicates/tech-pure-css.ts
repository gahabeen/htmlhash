import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+(?:([\\d.])+/)?pure(?:-min)?\\.css\\;version:\\1'),
    matchRegex('<div[^>]+class="[^"]*pure-u-(?:sm-|md-|lg-|xl-)?\\d-\\d'),
    // in text

    // in css
])
