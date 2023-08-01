import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.avis-verifies\\.com/'),
    // in dom
    matchSelector(`a[href*='.avis-verifies.com/'][target='_blank'], iframe[src*='.avis-verifies.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'avisVerifies'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
