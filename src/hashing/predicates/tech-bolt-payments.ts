import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'connect\\.bolt\\.com/'),
    matchRegexInAttribute('script', 'src', 'account\\.bolt\\.com/'),
    // in dom
    matchSelector(`bolt-checkout-button`),
    // in js
    matchRegexInInnerHTML('script', 'BoltCheckout'),
    matchRegexInInnerHTML('script', 'BoltPopup'),
    matchRegexInInnerHTML('script', 'BoltTrack'),
    matchRegexInInnerHTML('script', 'bolt_callbacks'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
