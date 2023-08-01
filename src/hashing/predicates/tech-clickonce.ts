import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href='https://go.microsoft.com/fwlink/?LinkId=154571']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
    matchRegex('\\.ClickOnceInfoText'),
])
