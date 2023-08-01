import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`form[action*='tfaforms.net'], iframe[src*='tfaforms.net']`),
    // in js
    matchRegexInInnerHTML('script', 'wFORMS.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
