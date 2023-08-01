import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'b\\.yjtag\\.jp/iframe'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<!-- (?:End )?Yahoo! Tag Manager -->'),
    // in text

    // in css
])
