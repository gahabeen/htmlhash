import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='reviews.hulkapps.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'hulkappsProductReview'),
    matchRegexInInnerHTML('script', 'hulkappsReviews'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
