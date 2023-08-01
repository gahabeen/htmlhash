import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.judge\\.me'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'judgeme'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
