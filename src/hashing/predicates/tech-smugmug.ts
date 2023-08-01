import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`.sm-page-footer-copyright`),
    // in js
    matchRegexInInnerHTML('script', '_smugsp'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
