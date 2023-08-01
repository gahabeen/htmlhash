import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:app|js)\\.convertflow\\.co'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'convertflow'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
