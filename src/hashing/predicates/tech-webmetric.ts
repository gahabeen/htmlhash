import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.webmetric\\.ir'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_wmid'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
