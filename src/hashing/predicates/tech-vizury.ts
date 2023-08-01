import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.vizury\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'safariVizury'),
    matchRegexInInnerHTML('script', 'vizury_data'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
