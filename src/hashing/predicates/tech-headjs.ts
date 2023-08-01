import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'head\\.(?:core|load)(?:\\.min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'head.browser.name'),
    // in meta

    // in scripts

    // in html
    matchRegex('<[^>]*data-headjs-load'),
    // in text

    // in css
])
