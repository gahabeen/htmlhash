import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 's3\\.amazonaws\\.com/downloads\\.mailchimp\\.com/js/mc-validate\\.js'),
    matchRegexInAttribute('script', 'src', 'cdn-images\\.mailchimp\\.com/[^>]*\\.css'),
    matchRegexInAttribute('script', 'src', 'chimpstatic\\.com/mcjs-connected'),
    // in dom
    matchSelector(`form#mc-embedded-subscribe-form, form[name*='mc-embedded-subscribe-form']`),
    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<input [^>]*id="mc-email"\\;confidence'),
    matchRegex('<!-- Begin MailChimp Signup Form -->'),
    // in text

    // in css
])
