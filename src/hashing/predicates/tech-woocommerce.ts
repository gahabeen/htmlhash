import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'woocommerce'),
    matchRegexInAttribute('script', 'src', '/woocommerce(?:\\.min)?\\.js(?:\\?ver=([0-9.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`.woocommerce, .woocommerce-no-js, link[rel*='woocommerce']`),
    // in js
    matchRegexInInnerHTML('script', 'woocommerce_params'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'WooCommerce ([\\d.]+)\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
