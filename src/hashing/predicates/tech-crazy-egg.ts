import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'script\\.crazyegg\\.com/pages/scripts/\\d+/\\d+\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'CE2'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
