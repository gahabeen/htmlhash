import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Backdrop'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^Backdrop CMS(?:\\s([\\d.]+))?\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
