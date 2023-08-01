import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.enamad.ir/'][target='_blank'], div.e-namad-widget-wrapper, img[src*='.enamad.ir/']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'enamad', '^\\d+$'),
    // in scripts

    // in html

    // in text

    // in css
])
