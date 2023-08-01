import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.acuityscheduling\\.com'),
    // in dom
    matchSelector(`a[href*='app.acuityscheduling.com']`),
    // in js
    matchRegexInInnerHTML('script', 'ACUITY_MODAL_INIT'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
