import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'app\\.youpay\\.ai/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'YouPay.buttonWindow'),
    matchRegexInInnerHTML('script', 'youpayReady'),
    matchRegexInInnerHTML('script', 'youpayStatus'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
