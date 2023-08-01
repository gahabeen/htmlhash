import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div[data-bg*='cdn.buttercms.com/'], img[src*='cdn.buttercms.com/'], link[href*='cdn.buttercms.com'], a[href*='cdn.buttercms.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
