import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js\\.stripe\\.com'),
    // in dom
    matchSelector(`a[href*='billing.stripe.com'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'Stripe.version'),
    matchRegexInInnerHTML('script', '__NEXT_DATA__.props.pageProps.appSettings.STRIPE_API_PUBLIC_KEY'),
    matchRegexInInnerHTML('script', 'checkout.enabledpayments.stripe'),
    // in meta

    // in scripts

    // in html
    matchRegex('<input[^>]+data-stripe'),
    // in text

    // in css
])
