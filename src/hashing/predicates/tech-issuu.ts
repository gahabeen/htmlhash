import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.issuu\\.com/'),
    // in dom
    matchSelector(`a[href*='issuu.com/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'IssuuReaders'),
    matchRegexInInnerHTML('script', 'issuuPanel'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
