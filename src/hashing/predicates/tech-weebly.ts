import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\d+\\.editmysite\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_W.configDomain'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
