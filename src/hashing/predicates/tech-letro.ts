import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'letro\\.jp/tags'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__letroUgcGadget'),
    matchRegexInInnerHTML('script', 'letroUgcSet'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
