import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.shopify\\.com/.+/pushdaddy_v([\\d\\.]+).*\\.js\\;version:\\1'),
    // in dom
    matchSelector(`div.pushdaddy-chats`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
