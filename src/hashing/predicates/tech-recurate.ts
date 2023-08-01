import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='support@recurate.com']`),
    matchSelector(`link[href*='/recurate-site.css']`),
    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', '"(?:vendor|title)?"\\:"Recurate"'),
    // in html

    // in text

    // in css
])
