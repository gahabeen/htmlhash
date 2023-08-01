import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.omise\\.co'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Omise'),
    matchRegexInInnerHTML('script', 'OmiseCard'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
