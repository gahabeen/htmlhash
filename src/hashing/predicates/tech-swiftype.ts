import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'swiftype\\.com/embed\\.js$'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Swiftype'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
