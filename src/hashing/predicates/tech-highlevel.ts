import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.leadconnectorhq\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'leadConnector.chatWidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
