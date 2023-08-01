import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div.topbar-img img[src*='/Areas/WebPart/Contents/FHeader/img/ataturk.svg']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
