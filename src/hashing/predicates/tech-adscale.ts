import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.adscale\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_adscale'),
    matchRegexInInnerHTML('script', 'adscaleAddToCart'),
    matchRegexInInnerHTML('script', 'adscaleViewProduct'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
