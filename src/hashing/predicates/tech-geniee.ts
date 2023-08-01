import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.gsspcln\\.jp/'),
    // in dom
    matchSelector(`img[src*='.gssprt.jp/'], link[href*='.gssprt.jp']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
