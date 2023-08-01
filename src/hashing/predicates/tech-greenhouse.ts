import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.greenhouse\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'populateGreenhouseJobs'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
