import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'CANDYRACK_DOCUMENT_LISTENER'),
    matchRegexInInnerHTML('script', 'candyrackEnableDebug'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
