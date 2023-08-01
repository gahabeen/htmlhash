import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/Limepay-v\\d+/'),
    matchRegexInAttribute('script', 'src', '/limepay-installment-show\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'LimepayIdentity'),
    matchRegexInInnerHTML('script', 'wc_ga_pro.available_gateways.limepay'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
