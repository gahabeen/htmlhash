import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.shopify\\.com/extensions/.+/([\\.\\d]{3,})/assets/upsell\\.min\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Obsidian.IncentiveApi'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
