import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdnebasnet\\.com/'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'author', '^Ebasnet Web Solutions$'),
    // in scripts

    // in html

    // in text

    // in css
])
