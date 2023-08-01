import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.applicantstack\\.com/'),
    // in dom
    matchSelector(`a[href*='.applicantstack.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
