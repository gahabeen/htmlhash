import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'PHP-Nuke'),
    // in scripts

    // in html
    matchRegex('<[^>]+Powered by PHP-Nuke'),
    // in text

    // in css
])
