import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:/mdbootstrap/([\\d\\.]+)/)?js/mdb\\.min\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'mdb.ScrollSpy'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
