import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'web2py\\.js'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^Web2py'),
    // in scripts

    // in html

    // in text

    // in css
])
