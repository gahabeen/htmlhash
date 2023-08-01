import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.smartrecruiters\\.com/'),
    // in dom
    matchSelector(`a[href*='careers.smartrecruiters.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
