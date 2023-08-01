import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'K2RatingURL'),
    // in meta

    // in scripts

    // in html
    matchRegex('<!--(?: JoomlaWorks "K2"| Start K2)'),
    // in text

    // in css
])
