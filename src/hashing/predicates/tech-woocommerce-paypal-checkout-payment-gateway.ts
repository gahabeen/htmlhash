import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/woocommerce-gateway-paypal-express-checkout/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='/wp-content/plugins/woocommerce-gateway-paypal-express-checkout/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
