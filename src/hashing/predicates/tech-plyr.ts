import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.plyr\\.io/([0-9.]+)/.+\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Plyr'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
    matchRegex('--plyr-progress'),
])
