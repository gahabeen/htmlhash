import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.mykamva\\.ir'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Kamva'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '[CK]amva'),
    // in scripts

    // in html

    // in text

    // in css
])
