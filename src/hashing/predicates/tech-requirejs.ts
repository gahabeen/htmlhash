import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'require.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'requirejs.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
