import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link rel="alternate" type="application/x-wiki" title="Edit this page" href="[^"]*/ikiwiki\\.cgi'),
    matchRegex('<a href="/(?:cgi-bin/)?ikiwiki\\.cgi\\?do='),
    // in text

    // in css
])
