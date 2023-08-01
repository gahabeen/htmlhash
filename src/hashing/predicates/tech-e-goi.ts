import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.e-goi\\.com/egoimmerce\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Egoimmerce'),
    matchRegexInInnerHTML('script', '_egoiaq'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
