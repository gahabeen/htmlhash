import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'JetshopData'),
    // in meta

    // in scripts

    // in html
    matchRegex('<(?:div|aside) id="jetshop-branding">'),
    // in text

    // in css
])
