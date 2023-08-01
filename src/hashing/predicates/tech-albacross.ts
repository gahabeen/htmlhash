import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.albacross\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_nQsv'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
