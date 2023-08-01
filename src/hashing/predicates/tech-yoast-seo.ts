import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`script.yoast-schema-graph`),
    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<!-- This site is optimized with the Yoast (?:WordPress )?SEO plugin v([^\\s]+) -\\;version:\\1'),
    matchRegex('<!-- This site is optimized with the Yoast SEO Premium plugin v(?:[^\\s]+) \\(Yoast SEO v([^\\s]+)\\) -\\;version:\\1'),
    // in text

    // in css
])
