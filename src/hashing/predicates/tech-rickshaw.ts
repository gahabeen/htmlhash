import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'rickshaw(?:\\.min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Rickshaw'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
