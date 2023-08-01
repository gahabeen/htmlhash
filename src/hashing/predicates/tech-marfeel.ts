import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.marfeel\\.com/'),
    matchRegexInAttribute('script', 'src', '\\.mrf\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'marfeel'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
