import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.narvar.com/'], img[src*='.narvar.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'NARVARJS_URL'),
    matchRegexInInnerHTML('script', 'narvar'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
