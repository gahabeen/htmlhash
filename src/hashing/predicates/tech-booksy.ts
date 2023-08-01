import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'booksy\\.com/widget/code\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'booksy'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
