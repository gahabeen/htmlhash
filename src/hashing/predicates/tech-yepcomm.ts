import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'author', 'Yepcomm Tecnologia'),
    matchRegexInAttribute('meta', 'copyright', 'Yepcomm Tecnologia'),
    // in scripts

    // in html

    // in text

    // in css
])
