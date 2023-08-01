import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SystemID'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'IONOS MyWebsite\\;version'),
    // in scripts

    // in html

    // in text

    // in css
])
