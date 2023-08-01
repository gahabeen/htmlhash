import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.akilliticaret\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'akillitel'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
