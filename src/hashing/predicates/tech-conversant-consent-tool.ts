import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.conversant\\.mgr\\.consensu\\.org/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'conversant'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
