import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/atatus\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'atatus.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
