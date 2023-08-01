import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:/yui/|yui\\.yahooapis\\.com)'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'YAHOO.VERSION'),
    matchRegexInInnerHTML('script', 'YUI.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
