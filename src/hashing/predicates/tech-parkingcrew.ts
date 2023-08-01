import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'pcrewAdloaded'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', "var\\slink\\s=\\s'www\\.parkingcrew\\.net'"),
    // in html

    // in text

    // in css
])
