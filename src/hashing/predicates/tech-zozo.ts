import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'zozo-main\\.min\\.js'),
    // in dom
    matchSelector(`a[href*='/zozo.vn/'][href*='footerurl'][target='_blank']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Zozo Ecommerce'),
    // in scripts

    // in html

    // in text

    // in css
])
