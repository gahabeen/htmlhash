import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'loader\\.wisepops\\.com/get-loader\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'WisePopsObject'),
    matchRegexInInnerHTML('script', 'wisepops._api'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
