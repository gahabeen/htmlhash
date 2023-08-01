import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('Powered by <a href="https://gerrit\\.googlesource\\.com/gitiles/">Gitiles<'),
    // in text

    // in css
])
