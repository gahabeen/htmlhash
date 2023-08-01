import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'protovis.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'protovis'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
