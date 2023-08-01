import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'highstock[.-]?([\\d\\.]*\\d).*\\.js\\;version:\\1'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<svg[^>]*><desc>Created with Highstock ([\\d.]*)\\;version:\\1'),
    // in text

    // in css
])
