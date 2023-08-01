import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.adligature\\.com/.+/advally-([\\d.]+)\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'advally'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
