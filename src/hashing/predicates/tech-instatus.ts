import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a.footer__link`),
    matchSelector(`a[href*='instatus.com'][target='_blank'], iframe[src*='.instatus.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
