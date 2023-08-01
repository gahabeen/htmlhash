import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<a[^>]+title="POWERGAP'),
    matchRegex('<input type="hidden" name="shopid"'),
    // in text

    // in css
])
