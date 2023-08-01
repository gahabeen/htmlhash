import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div.g2-tooltip`),
    // in js
    matchRegexInInnerHTML('script', 'G2.Chart'),
    matchRegexInInnerHTML('script', 'G2.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
