import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`meta[property='og:image'][content*='static.cococart.co']`),
    matchSelector(`div[style*='static.cococart.co']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
