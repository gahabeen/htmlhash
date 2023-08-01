import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.getambassador\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_mbsy.integrations'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
