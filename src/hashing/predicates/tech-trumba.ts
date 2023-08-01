import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='www.trumba.com/calendars/']`),
    // in js
    matchRegexInInnerHTML('script', '$Trumba'),
    matchRegexInInnerHTML('script', '$Trumba.version'),
    matchRegexInInnerHTML('script', 'Trumba'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
