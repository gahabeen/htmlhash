import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'https?://[^/]*\\.openx\\.net'),
    matchRegexInAttribute('script', 'src', 'https?://[^/]*\\.servedbyopenx\\.com'),
    // in dom
    matchSelector(`iframe[src*='.openx.net'], img[src*='.openx.net'], link[href*='.openx.net']`),
    // in js
    matchRegexInInnerHTML('script', 'openx.name'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
