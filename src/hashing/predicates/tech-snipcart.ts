import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'https://cdn\\.snipcart\\.com/themes/v([\\w.]+)/default/snipcart\\.js\\;version:\\1'),
    // in dom
    matchSelector(`div#snipcart`),
    matchSelector(`link[href*='snipcart.css']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
