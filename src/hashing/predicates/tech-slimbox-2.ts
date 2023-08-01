import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'slimbox2\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link [^>]*href="[^/]*slimbox2(?:-rtl)?\\.css'),
    // in text

    // in css
])
