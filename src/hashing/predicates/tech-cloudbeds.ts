import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.cloudbeds\\.com/'),
    // in dom
    matchSelector(`a[href*='.cloudbeds.com/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'CloudBeds_widget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
