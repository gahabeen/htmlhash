import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'edge\\.curalate\\.com'),
    matchRegexInAttribute('script', 'src', 'cdn\\.curalate\\.com'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
