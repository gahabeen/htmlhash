import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'neurolead.convoScript'),
    matchRegexInInnerHTML('script', 'neurolead.elChatbot'),
    matchRegexInInnerHTML('script', 'neuroleadLanguage'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
