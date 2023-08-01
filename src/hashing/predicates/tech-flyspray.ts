import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('(?:<a[^>]+>Powered by Flyspray|<map id="projectsearchform)'),
    // in text

    // in css
])
