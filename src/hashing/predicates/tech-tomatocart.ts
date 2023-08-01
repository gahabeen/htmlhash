import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AjaxShoppingCart'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'TomatoCart'),
    // in scripts

    // in html

    // in text

    // in css
])
