import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`.powered-by-uscreen`),
    // in js
    matchRegexInInnerHTML('script', 'analyticsHost'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
