import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'moment(?:\\.min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'moment'),
    matchRegexInInnerHTML('script', 'moment.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
