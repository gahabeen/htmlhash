import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='/_sitecore/']`),
    matchSelector(`img[src^='/-/media/']`),
    matchSelector(`img[src*='/~/media/.+\.ashx']`),
    // in js
    matchRegexInInnerHTML('script', 'SitecoreUtilities'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
