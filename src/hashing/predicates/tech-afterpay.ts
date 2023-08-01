import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'portal\\.afterpay\\.com'),
    matchRegexInAttribute('script', 'src', 'static\\.afterpay\\.com'),
    matchRegexInAttribute('script', 'src', 'present-afterpay\\.js'),
    matchRegexInAttribute('script', 'src', 'afterpay-products\\.min\\.js'),
    matchRegexInAttribute('script', 'src', 'js\\.stripe\\.com/v3/fingerprinted/js/elements-afterpay-clearpay-message-.+\\.js'),
    // in dom
    matchSelector(`#afterpay, .afterpay, .AfterpayMessage, [aria-label='Afterpay'], link[href*='/wp-content/plugins/afterpay-gateway-for-woocommerce/']`),
    // in js
    matchRegexInInnerHTML('script', 'Afterpay'),
    matchRegexInInnerHTML('script', 'Afterpay.version'),
    matchRegexInInnerHTML('script', 'AfterpayAttractWidget'),
    matchRegexInInnerHTML('script', 'AfterpayGenericErrorHtml'),
    matchRegexInInnerHTML('script', 'AfterpayWidgetHtml'),
    matchRegexInInnerHTML('script', 'afterpay_product'),
    matchRegexInInnerHTML('script', 'checkout.enabledpayments.afterpay'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
