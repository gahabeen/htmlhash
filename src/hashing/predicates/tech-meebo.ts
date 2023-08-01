import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('(?:<iframe id="meebo-iframe"|Meebo\\(\'domReady\'\\))'),
    // in text

    // in css
])
