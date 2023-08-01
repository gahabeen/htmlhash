import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/cloudcart-(?:assets|storage)/'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'author', '^CloudCart LLC$'),
    // in scripts

    // in html

    // in text

    // in css
])
