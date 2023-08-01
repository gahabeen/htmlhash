import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^HighStore\\.IR$'),
    matchRegexInAttribute('meta', 'hs:version', '^([\\d\\.]+)$\\;version:\\1\\;confidence'),
    // in scripts

    // in html

    // in text

    // in css
])
