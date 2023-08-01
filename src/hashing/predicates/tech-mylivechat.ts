import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'mylivechat\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MyLiveChat.Version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
