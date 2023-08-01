import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Quick\\.CMS(?: v([\\d.]+))?\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('<a href="[^>]+opensolution\\.org/">CMS by'),
    // in text

    // in css
])
