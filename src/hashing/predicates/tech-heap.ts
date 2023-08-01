import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.heapanalytics\\.com'),
    matchRegexInAttribute('script', 'src', 'heap-\\d+\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'heap.version.heapJsVersion'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
