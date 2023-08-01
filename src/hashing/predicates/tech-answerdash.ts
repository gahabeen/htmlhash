import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.answerdash\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AnswerDash'),
    matchRegexInInnerHTML('script', 'AnswerDash.__plugin'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
