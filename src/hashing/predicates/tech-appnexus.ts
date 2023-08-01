import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'adnxs\\.(?:net|com)'),
    // in dom
    matchSelector(`iframe[src*='.adnxs.com'], img[src*='.adnxs.com'], link[href*='.adnxs.com']`),
    // in js
    matchRegexInInnerHTML('script', 'appnexus'),
    matchRegexInInnerHTML('script', 'appnexusVideo'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
