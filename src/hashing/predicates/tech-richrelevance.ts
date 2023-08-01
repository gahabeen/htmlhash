import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.richrelevance\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'RR.U'),
    matchRegexInInnerHTML('script', 'rr_v'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
