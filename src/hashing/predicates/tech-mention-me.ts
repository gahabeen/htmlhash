import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.mention-me\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MentionMe'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
