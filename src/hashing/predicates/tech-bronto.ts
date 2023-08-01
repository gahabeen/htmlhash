import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:snip|cdn)\\.bronto\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BrontoShopify'),
    matchRegexInInnerHTML('script', 'bronto.versions.sca'),
    matchRegexInInnerHTML('script', 'brontoCookieConsent'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
