import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'select2(?:\\.min|\\.full)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'jQuery.fn.select2'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
