import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^phpwind(?: v([0-9-]+))?\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('(?:Powered|Code) by <a href="[^"]+phpwind\\.net'),
    // in text

    // in css
])
