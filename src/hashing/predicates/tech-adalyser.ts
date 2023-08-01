import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'c5\\.adalyser\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'adalyserModules'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
