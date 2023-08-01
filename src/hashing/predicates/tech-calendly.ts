import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'assets\\.calendly\\.com/'),
    // in dom
    matchSelector(`a[href*='//calendly.com/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'Calendly'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
