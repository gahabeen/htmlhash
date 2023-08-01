import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'zepto.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Zepto'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
