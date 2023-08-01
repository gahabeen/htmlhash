import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.monetate\\.net'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'monetate'),
    matchRegexInInnerHTML('script', 'monetateQ'),
    matchRegexInInnerHTML('script', 'monetateT'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
