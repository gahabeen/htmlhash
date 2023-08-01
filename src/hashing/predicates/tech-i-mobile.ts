import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.i-mobile\\.co\\.jp/'),
    // in dom
    matchSelector(`img[src*='.i-mobile.co.jp/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
