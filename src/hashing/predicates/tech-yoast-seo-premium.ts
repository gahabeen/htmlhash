import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<!-- This site is optimized with the Yoast SEO Premium plugin v([^\\s]+) \\;version:\\1'),
    // in text

    // in css
])
