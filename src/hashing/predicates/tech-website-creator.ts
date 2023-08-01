import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Website Creator by hosttech'),
    matchRegexInAttribute('meta', 'wsc_rendermode', ''),
    // in scripts

    // in html

    // in text

    // in css
])
