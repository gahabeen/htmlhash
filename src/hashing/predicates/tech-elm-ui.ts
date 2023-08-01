import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<style>[\\s\\S]*\\.explain > \\.s[\\s\\S]*\\.explain > \\.ctr > \\.s'),
    // in text

    // in css
])
