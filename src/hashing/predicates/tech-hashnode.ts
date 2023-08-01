import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'hashnode\\.com'),
    // in dom
    matchSelector(`div.css-zigog8`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
