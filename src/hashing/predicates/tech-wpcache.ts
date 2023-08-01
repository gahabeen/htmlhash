import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'wpCache'),
    matchRegexInAttribute('meta', 'keywords', 'wpCache'),
    // in scripts

    // in html
    matchRegex('<!--[^>]+wpCache'),
    // in text

    // in css
])
