import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'plenty\\.shop\\.(?:min\\.)?js'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'plentymarkets'),
    // in scripts

    // in html

    // in text

    // in css
])
