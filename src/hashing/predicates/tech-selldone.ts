import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'webpackChunkselldone'),
    // in meta
    matchRegexInAttribute('meta', 'selldone-capi', ''),
    matchRegexInAttribute('meta', 'selldone-cdn-id', ''),
    matchRegexInAttribute('meta', 'selldone-cdn-images', ''),
    matchRegexInAttribute('meta', 'selldone-iframe', ''),
    // in scripts

    // in html

    // in text

    // in css
])
