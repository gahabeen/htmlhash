import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SPOTIM.initConversation'),
    // in meta
    matchRegexInAttribute('meta', 'spotim-ads', ''),
    // in scripts

    // in html

    // in text

    // in css
])
