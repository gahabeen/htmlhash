import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.ctctcdn\\.com/'),
    // in dom
    matchSelector(`a[href*='.constantcontact.com/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', '_ctct_m'),
    matchRegexInInnerHTML('script', 'ctctOnLoadCallback'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
