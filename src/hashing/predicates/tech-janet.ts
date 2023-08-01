import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='.j-a-net.jp'],img[data-src*='.j-a-net.jp']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
