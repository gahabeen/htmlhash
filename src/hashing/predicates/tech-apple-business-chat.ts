import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/apple_business_chat_commerce/.+/apple_message_button_v([\\d\\.]+)\\.js\\;version:\\1'),
    // in dom
    matchSelector(`a[href*='bcrw.apple.com/business/api']`),
    // in js
    matchRegexInInnerHTML('script', 'appleBusinessChat.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
