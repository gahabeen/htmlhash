import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+elements-page[^>"]+css\\;confidence'),
    matchRegex('<div[^>]+phase-banner-alpha\\;confidence'),
    matchRegex('<div[^>]+phase-banner-beta\\;confidence'),
    matchRegex('<div[^>]+govuk-box-highlight\\;confidence'),
    // in text

    // in css
])
