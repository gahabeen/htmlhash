import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'reddit'),
    // in meta

    // in scripts

    // in html
    matchRegex('(?:<a[^>]+Powered by Reddit|powered by <a[^>]+>reddit<)'),
    // in text

    // in css
])
