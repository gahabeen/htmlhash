import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'ametys\\.js'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '(?:Ametys|Anyware Technologies)'),
    // in scripts

    // in html

    // in text

    // in css
])
