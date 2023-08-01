import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'fast-tags\\.deliverr\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'deliverrScript'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
