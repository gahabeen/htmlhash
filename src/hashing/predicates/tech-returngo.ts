import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.returngo\\.ai/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'returnGoCanBeRun'),
    matchRegexInInnerHTML('script', 'returnGoIntegrationData'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
