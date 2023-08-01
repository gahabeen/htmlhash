import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'ds-aksb-a\\.akamaihd\\.net/aksb.min.js'),
    matchRegexInAttribute('script', 'src', 'aksb\\.min\\.js\\;confidence'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AKSB'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
