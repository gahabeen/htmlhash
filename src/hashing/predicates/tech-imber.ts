import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '$imber.getVisitor'),
    matchRegexInInnerHTML('script', 'IMBER_ID'),
    matchRegexInInnerHTML('script', 'IMBER_SOCKET'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
