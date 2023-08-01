import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`.graphcms-image-wrapper`),
    matchSelector(`img[src*='media.graphcms.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
