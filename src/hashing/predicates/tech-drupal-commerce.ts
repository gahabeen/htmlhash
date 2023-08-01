import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/modules/(?:contrib/)?commerce/js/conditions\\.js\\;confidence'),
    matchRegexInAttribute('script', 'src', '/profiles/commerce_kickstart/modules/contrib/commerce/modules/checkout/commerce_checkout\\.js\\;confidence'),
    matchRegexInAttribute('script', 'src', '/sites/(?:all|default)/modules/(?:contrib/)?commerce/modules/checkout/commerce_checkout\\.js\\;confidence'),
    // in dom
    matchSelector(`aside#cart-offcanvas, form.commerce-order-item-add-to-cart-form,form.commerce-add-to-cart`),
    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<[^>]+(?:id="block[_-]commerce[_-]cart[_-]cart|class="commerce[_-]product[_-]field)'),
    // in text

    // in css
])
