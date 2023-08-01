import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.reviews.io/company-reviews/']`),
    // in js
    matchRegexInInnerHTML('script', 'reviewsio_hasVoted'),
    matchRegexInInnerHTML('script', 'reviewsio_shareLink'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
