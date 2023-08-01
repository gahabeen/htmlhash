import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SFUI.Checkout'),
    // in meta
    matchRegexInAttribute('meta', 'generation-copyright', 'by\\sSearchFit\\sShopping\\sCart\\sv([\\d\\.]+)\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
