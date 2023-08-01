import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<[^>]+ class ?= ?"(?:e-control|[^"]+ e-control)(?: )[^"]* e-lib\\b'),
    // in text

    // in css
])
