import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'slimbox\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link [^>]*href="[^/]*slimbox(?:-rtl)?\\.css'),
    // in text

    // in css
])
