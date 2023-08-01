import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='datocms-assets.com'], img[src*='datocms-assets.com'], source[src*='datocms-assets.com'], div[style*='datocms-assets.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
