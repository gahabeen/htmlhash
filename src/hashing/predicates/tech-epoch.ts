import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'epoch(?:\\.min)?\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+?href="[^"]+epoch(?:\\.min)?\\.css'),
    // in text

    // in css
])
