import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.simplero\\.com/'),
    // in dom
    matchSelector(`a[href*='.simplero.com/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'Simplero'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
