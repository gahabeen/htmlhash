import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.totango\\.com/totango([\\d\\.]+)\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '\\.amazonaws\\.com/totango-cdn/totango\\d\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'totango'),
    matchRegexInInnerHTML('script', 'totangoLoader'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
