import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'sib(?:automation|forms)\\.com/'),
    // in dom
    matchSelector(`iframe[src*='sibautomation.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'sendinblue'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
