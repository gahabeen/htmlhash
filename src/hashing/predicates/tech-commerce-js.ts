import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.chec\\.io/v(\\d+)/commerce\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', 'chec/commerce\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'CommercejsSpace'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
