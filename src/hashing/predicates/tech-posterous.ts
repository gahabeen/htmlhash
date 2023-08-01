import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Posterous'),
    // in meta

    // in scripts

    // in html
    matchRegex('<div class="posterous'),
    // in text

    // in css
])
