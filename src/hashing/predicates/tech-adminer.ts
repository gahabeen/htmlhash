import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('Adminer</a> <span class="version">([\\d.]+)</span>\\;version:\\1'),
    matchRegex('onclick="bodyClick\\(event\\);" onload="verifyVersion\\(\'([\\d.]+)\'\\);">\\;version:\\1'),
    // in text

    // in css
])
