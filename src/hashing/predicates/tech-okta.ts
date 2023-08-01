import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'oktacdn\\.com/.+/([\\d.]+)/\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'OktaAuth'),
    matchRegexInInnerHTML('script', 'isOktaEnabled'),
    matchRegexInInnerHTML('script', 'okta.cdnUrlHostname'),
    matchRegexInInnerHTML('script', 'okta.locale'),
    matchRegexInInnerHTML('script', 'oktaCurrentSessionUrl'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
