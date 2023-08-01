import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '.+\\.twic\\.pics'),
    // in dom
    matchSelector(`.twic`),
    matchSelector(`[data-twic-src]`),
    matchSelector(`data-twic-background`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
