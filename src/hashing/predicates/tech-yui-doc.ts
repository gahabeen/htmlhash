import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('(?:<html[^>]* yuilibrary\\.com/rdf/[\\d.]+/yui\\.rdf|<body[^>]+class="yui3-skin-sam)'),
    // in text

    // in css
])
