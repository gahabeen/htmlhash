import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'InSales'),
    matchRegexInInnerHTML('script', 'InSalesUI'),
    matchRegexInInnerHTML('script', 'insalesGeocodeResults'),
    // in meta
    matchRegexInAttribute('meta', 'insales-redefined-api-method', ''),
    // in scripts

    // in html

    // in text

    // in css
])
