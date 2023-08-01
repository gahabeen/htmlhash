import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.survicate\\.com/'),
    // in dom
    matchSelector(`link[href*='.survicate.com']`),
    // in js
    matchRegexInInnerHTML('script', 'survicate'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
