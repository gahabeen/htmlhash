import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^WEBDEV$'),
    // in scripts

    // in html
    matchRegex('<!-- [a-zA-Z0-9_]+ [\\d/]+ [\\d:]+ WebDev \\d\\d ([\\d.]+) -->\\;version:\\1'),
    // in text

    // in css
])
