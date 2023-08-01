import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'statcounter\\.com/counter/counter'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_statcounter'),
    matchRegexInInnerHTML('script', 'sc_project'),
    matchRegexInInnerHTML('script', 'sc_security'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
