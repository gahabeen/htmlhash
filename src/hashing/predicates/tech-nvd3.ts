import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'nv\\.d3(?:\\.min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'nv.addGraph'),
    matchRegexInInnerHTML('script', 'nv.version'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]* href=[^>]+nv\\.d3(?:\\.min)?\\.css'),
    // in text

    // in css
])
