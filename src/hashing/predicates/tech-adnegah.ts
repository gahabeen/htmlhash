import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.adnegah\\.net/'),
    // in dom
    matchSelector(`iframe[scr*='adnegah.net']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
