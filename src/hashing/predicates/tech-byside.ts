import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'webcare\\.byside\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BySide'),
    matchRegexInInnerHTML('script', 'bysideWebcare_banner'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
