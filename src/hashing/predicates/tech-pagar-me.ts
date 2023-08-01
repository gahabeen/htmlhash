import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'assets\\.pagar\\.me/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PagarMeCheckout'),
    matchRegexInInnerHTML('script', 'pagarme.balance'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
