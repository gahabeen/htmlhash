import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.affirm\\.com/js/v([\\d\\.]+)/affirm\\.js\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='.affirm.com']`),
    // in js
    matchRegexInInnerHTML('script', '_affirm_config'),
    matchRegexInInnerHTML('script', 'affirm.Rollbar'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
