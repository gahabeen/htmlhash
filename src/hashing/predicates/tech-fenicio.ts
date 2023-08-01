import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '_FN.validadorTelefono'),
    matchRegexInInnerHTML('script', 'fnWishlist.cargarInfoArticulos'),
    matchRegexInInnerHTML('script', 'fneCommerce.miCompraVisto'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
