import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:\\.exponea\\.com)?/js/exponea\\.min\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'exponea.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
