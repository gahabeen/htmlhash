import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'bootstrap-table(?:\\.min)?\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+href="[^>]*bootstrap-table(?:\\.min)?\\.css'),
    // in text

    // in css
])
