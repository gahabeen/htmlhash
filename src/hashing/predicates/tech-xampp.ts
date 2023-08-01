import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'author', 'Kai Oswald Seidler\\;confidence'),
    // in scripts

    // in html
    matchRegex('<title>XAMPP(?: Version ([\\d\\.]+))?</title>\\;version:\\1'),
    // in text

    // in css
])
