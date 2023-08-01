import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('powered by <a href="[^>]+getpelican\\.com'),
    matchRegex('powered by <a href="https?://pelican\\.notmyidea\\.org'),
    // in text

    // in css
])
