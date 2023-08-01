import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'consent\\.cookiebot\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Cookiebot.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
