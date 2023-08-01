import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'govuk-template\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'GOVUK'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+govuk-template[^>"]+css'),
    matchRegex('<link[^>]+govuk-template-print[^>"]+css'),
    matchRegex('<link[^>]+govuk-template-ie6[^>"]+css'),
    matchRegex('<link[^>]+govuk-template-ie7[^>"]+css'),
    matchRegex('<link[^>]+govuk-template-ie8[^>"]+css'),
    // in text

    // in css
])
