import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='kqsdesign.pl'][target='_blank']`),
    matchSelector(`a[href*='kqs.pl'][target='_blank']`),
    matchSelector(`#kqs-box,kqs-cookie`),
    // in js
    matchRegexInInnerHTML('script', 'kqs_box'),
    matchRegexInInnerHTML('script', 'kqs_off'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
