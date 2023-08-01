import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.leadinfo\\.net'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'GlobalLeadinfoNamespace'),
    matchRegexInInnerHTML('script', 'leadinfo'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
