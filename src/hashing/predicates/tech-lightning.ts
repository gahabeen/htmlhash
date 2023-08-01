import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/lightning(?:-pro)?/.+lightning\\.min\\.js(?:.+ver=([\\d\\.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='/wp-content/themes/lightning/'], link[href*='/wp-content/themes/lightning-pro/']`),
    // in js
    matchRegexInInnerHTML('script', 'lightningOpt.header_scrool'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
