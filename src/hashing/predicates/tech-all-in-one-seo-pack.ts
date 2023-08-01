import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<!-- All in One SEO Pack ([\\d.]+) \\;version:\\1'),
    // in text

    // in css
])
