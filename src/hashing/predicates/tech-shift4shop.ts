import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:twlh(?:track)?\\.asp|3d_upsell\\.js)'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_3d_cart.subtotal'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
