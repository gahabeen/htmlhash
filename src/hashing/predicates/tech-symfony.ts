import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div.sf-toolbar-block, div.sf-toolbar`),
    // in js
    matchRegexInInnerHTML('script', 'Sfjs'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
