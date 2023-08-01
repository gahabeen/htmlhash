import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'vs350\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<a[^>]+>Powered By VP-ASP Shopping Cart</a>'),
    // in text

    // in css
])
