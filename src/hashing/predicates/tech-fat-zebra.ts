import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'paynow\\.pmnts\\.io'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<(?:iframe|img|form)[^>]+paynow\\.pmnts\\.io'),
    matchRegex('<(?:iframe)[^>]+FatZebraFrame'),
    // in text

    // in css
])
