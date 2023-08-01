import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.brandfolder\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Brandfolder.account'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
