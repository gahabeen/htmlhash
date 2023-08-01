import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div#___gatsby, style#gatsby-inlined-css`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^Gatsby(?: ([0-9.]+))?$\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
