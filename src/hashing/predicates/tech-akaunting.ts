import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+akaunting-green\\.css'),
    matchRegex('Powered By Akaunting: <a [^>]*href="https?://(?:www\\.)?akaunting\\.com[^>]+>'),
    // in text

    // in css
])
