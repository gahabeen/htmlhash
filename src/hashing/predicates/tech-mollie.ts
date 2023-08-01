import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/mollie-payments-for-woocommerce/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Mollie'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
