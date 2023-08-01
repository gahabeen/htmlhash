import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`html[data-stencil-build][class*='hydrated'], stencil-router, stencil-route-link`),
    // in js
    matchRegexInInnerHTML('script', 'stencil.inspect'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
