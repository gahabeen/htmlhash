import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`[ng-version]`),
    // in js
    matchRegexInInnerHTML('script', 'ng.coreTokens'),
    matchRegexInInnerHTML('script', 'ng.probe'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
