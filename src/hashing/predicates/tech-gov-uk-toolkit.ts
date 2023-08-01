import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'GOVUK.details'),
    matchRegexInInnerHTML('script', 'GOVUK.modules'),
    matchRegexInInnerHTML('script', 'GOVUK.primaryLinks'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
