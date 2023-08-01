import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.aweber\\.com/'),
    // in dom
    matchSelector(`form[action*='aweber.com']`),
    // in js
    matchRegexInInnerHTML('script', 'awt_analytics'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
