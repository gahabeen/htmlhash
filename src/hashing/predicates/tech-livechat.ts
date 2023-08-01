import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.livechatinc\\.com/.*tracking\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'LiveChatWidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
