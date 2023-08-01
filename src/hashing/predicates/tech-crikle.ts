import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'crikle.contactId'),
    matchRegexInInnerHTML('script', 'crikle.openConvertWidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
