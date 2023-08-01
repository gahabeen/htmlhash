import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'hammer(?:\\.min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Ha.VERSION'),
    matchRegexInInnerHTML('script', 'Hammer'),
    matchRegexInInnerHTML('script', 'Hammer.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
