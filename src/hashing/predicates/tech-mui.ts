import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`style[data-meta='MuiPaper'], div.MuiBox-root, div.MuiPaper-root, style[data-meta='MuiButton']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
    matchRegex('\\.MuiPaper-root'),
])
