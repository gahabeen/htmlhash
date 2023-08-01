import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'static-cf\\.cleverbridge\\.\\w+/js/Shop\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'cbCartProductSelection'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
