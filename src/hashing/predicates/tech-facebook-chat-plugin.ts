import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'connect\\.facebook\\.net/.+\\.customerchat\\.js'),
    // in dom
    matchSelector(`iframe[src*='.facebook.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'facebookChatSettings'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
