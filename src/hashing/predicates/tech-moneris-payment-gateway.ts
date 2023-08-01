import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/woocommerce-gateway-moneris/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'wc_moneris_hosted_tokenization_params'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
