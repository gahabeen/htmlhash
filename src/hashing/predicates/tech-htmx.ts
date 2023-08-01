import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/htmx\\.org@([\\d\\.]+)\\;version:\\1'),
    // in dom
    matchSelector(`script[data-src*='/dist/htmx.min.js']`),
    // in js
    matchRegexInInnerHTML('script', 'htmx'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
