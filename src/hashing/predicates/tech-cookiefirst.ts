import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'consent\\.cookiefirst\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'cookiefirst_show_settings'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
