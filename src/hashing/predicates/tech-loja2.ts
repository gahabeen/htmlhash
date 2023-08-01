import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'loja2\\.com\\.br'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
