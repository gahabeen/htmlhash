import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'use\\.typekit\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Typekit.config.js'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link [^>]*href="[^"]+use\\.typekit\\.(?:net|com)'),
    // in text

    // in css
])
