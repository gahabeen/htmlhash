import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'assets\\.jumpseller\\.\\w+/'),
    matchRegexInAttribute('script', 'src', 'jumpseller-apps\\.herokuapp\\.\\w+/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Jumpseller'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
