import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='//donorbox.org/'], iframe[src*='//donorbox.org/']`),
    // in js
    matchRegexInInnerHTML('script', 'DONORBOX'),
    matchRegexInInnerHTML('script', 'DonorBox'),
    matchRegexInInnerHTML('script', 'donorbox_check_donation_period'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
