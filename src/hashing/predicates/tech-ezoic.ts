import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.ezo(?:js|ic|dn)\\.(?:com|net)'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'EzoicA'),
    matchRegexInInnerHTML('script', 'EzoicBanger'),
    matchRegexInInnerHTML('script', 'ezoicTestActive'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
