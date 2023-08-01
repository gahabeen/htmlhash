import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.podia\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Podia.Checkout'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
