import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Foundation.version'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+foundation[^>"]+css'),
    matchRegex('<div [^>]*class="[^"]*(?:small|medium|large)-\\d{1,2} columns'),
    // in text

    // in css
])
