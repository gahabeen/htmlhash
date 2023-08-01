import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/redoc\\.(?:min\\.)?js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Redoc.version'),
    // in meta

    // in scripts

    // in html
    matchRegex('<redoc '),
    // in text

    // in css
])
