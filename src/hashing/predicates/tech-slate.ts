import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'slate-technolutions-net\\.cdn\\.technolutions\\.net/'),
    // in dom
    matchSelector(`link[href*='slate-technolutions-net.cdn.technolutions.net/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
