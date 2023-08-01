import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('Powered by <a href="[^>]+phpfusion'),
    matchRegex('Powered by <a href="[^>]+php-fusion'),
    // in text

    // in css
])
