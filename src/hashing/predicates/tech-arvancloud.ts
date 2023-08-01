import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='.arvanstorage.com/'], img[src*='.arvanstorage.ir/']`),
    // in js
    matchRegexInInnerHTML('script', 'ArvanCloud'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
