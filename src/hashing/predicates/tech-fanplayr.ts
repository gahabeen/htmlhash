import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.fanplayr\\.com/.+/([\\d\\.]+)\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='cdn.fanplayr.com']`),
    // in js
    matchRegexInInnerHTML('script', 'fanplayr.platform.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
