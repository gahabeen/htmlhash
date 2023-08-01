import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.split\\.io/(?:sdk/split-([\\d\\.]+)\\.min\\.js)?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SPLITIO_API_KEY'),
    matchRegexInInnerHTML('script', 'split_shopper_client'),
    matchRegexInInnerHTML('script', 'split_visitor_client'),
    matchRegexInInnerHTML('script', 'splitio'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
