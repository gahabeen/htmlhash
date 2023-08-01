import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'www\\.powr\\.io/powr\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'POWR_RECEIVERS'),
    matchRegexInInnerHTML('script', 'loadPowr'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
