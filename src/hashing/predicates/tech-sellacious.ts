import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`.mod-sellacious-cart`),
    // in js
    matchRegexInInnerHTML('script', 'SellaciousViewCartAIO'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
