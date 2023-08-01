import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PT.Analytics.addItem'),
    matchRegexInInnerHTML('script', 'PT.Sections.Checkout'),
    matchRegexInInnerHTML('script', 'PT.Translation.BasketIsEmpty'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
