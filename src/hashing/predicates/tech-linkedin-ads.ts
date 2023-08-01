import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='dc.ads.linkedin.com']`),
    matchSelector(`link[href*='px.ads.linkedin.com']`),
    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<img [^>]*src="[^/]*//[^/]*px\\.ads\\.linkedin\\.com'),
    // in text

    // in css
])
