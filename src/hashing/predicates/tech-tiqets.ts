import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.tiqets.com/'][target='_blank'], iframe[src*='.tiqets.com/']`),
    // in js
    matchRegexInInnerHTML('script', '__TIQETS_LOADER_REINIT'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
