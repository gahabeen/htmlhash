import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.jsdelivr\\.net/npm/intersection-observer@([\\d\\.]+)\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '/assets/(?:.+)?intersection-observer\\.[\\d\\w\\.]+\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
