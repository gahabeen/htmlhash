import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ScullyIO'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^Scully\\s([\\d\\.]+)$\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
