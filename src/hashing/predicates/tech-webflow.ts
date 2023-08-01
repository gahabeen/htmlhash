import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`html[data-wf-site]`),
    // in js
    matchRegexInInnerHTML('script', 'Webflow'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'Webflow'),
    // in scripts

    // in html

    // in text

    // in css
])
