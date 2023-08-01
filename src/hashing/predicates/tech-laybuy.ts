import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.laybuy\\.com/'),
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/woo-laybuy/'),
    // in dom
    matchSelector(`iframe[src='.laybuy.com/'], a[href*='.laybuy.com/what-is-laybuy']`),
    // in js
    matchRegexInInnerHTML('script', 'LaybuyHelper'),
    matchRegexInInnerHTML('script', 'checkout.enabledpayments.laybuy'),
    matchRegexInInnerHTML('script', 'laybuyEnableCart'),
    matchRegexInInnerHTML('script', 'laybuyMoneyOverides'),
    matchRegexInInnerHTML('script', 'wc_ga_pro.available_gateways.laybuy'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
