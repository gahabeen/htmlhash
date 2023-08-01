import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'wchat\\.freshchat\\.com/js/widget\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Freshbots'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
