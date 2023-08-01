import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'UserEngage'),
    // in meta

    // in scripts

    // in html
    matchRegex('<div[^>]+/id="ue_widget"'),
    // in text

    // in css
])
