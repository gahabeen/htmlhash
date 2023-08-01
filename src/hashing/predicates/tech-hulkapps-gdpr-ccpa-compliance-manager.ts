import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cookiebar\\.hulkapps\\.com/hulk_cookie_bar\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'hulkSetCookie'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
