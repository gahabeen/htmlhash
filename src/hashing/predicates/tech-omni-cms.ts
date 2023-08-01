import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='a.cms.omniupdate.com/11/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
