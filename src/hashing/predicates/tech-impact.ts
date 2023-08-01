import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'd\\.impactradius-event\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ImpactRadiusEvent'),
    matchRegexInInnerHTML('script', 'irEvent'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
