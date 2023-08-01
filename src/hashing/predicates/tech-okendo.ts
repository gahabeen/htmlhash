import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div.okeReviews`),
    // in js
    matchRegexInInnerHTML('script', 'okeReviewsWidgetOnInit'),
    matchRegexInInnerHTML('script', 'okeWidgetControlInit'),
    matchRegexInInnerHTML('script', 'okendoReviews'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
