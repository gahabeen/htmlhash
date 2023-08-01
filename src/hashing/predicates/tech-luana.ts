import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'luanaframework'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^Luana\\sFramework\\s([\\d\\.]+)$\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
