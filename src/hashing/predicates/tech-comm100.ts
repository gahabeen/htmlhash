import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Comm100API'),
    matchRegexInInnerHTML('script', 'comm100_chatButton'),
    matchRegexInInnerHTML('script', 'comm100_livechat_open_link'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
