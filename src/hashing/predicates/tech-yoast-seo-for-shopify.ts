import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`script#yoast-schema-graph`),
    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<!-- This site is optimized with Yoast SEO for Shopify -->'),
    // in text

    // in css
])
