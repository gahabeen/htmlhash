import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//chat-assets\\.frontapp\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'FrontChat'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
