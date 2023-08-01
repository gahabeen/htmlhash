import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.trustcommander\\.net/privacy/.+_v([\\d]+)_([\\d]+)\\.js\\;version:\\1.\\2'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
