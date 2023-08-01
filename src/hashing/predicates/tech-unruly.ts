import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.unrulymedia.com']`),
    // in js
    matchRegexInInnerHTML('script', 'unruly.native'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
