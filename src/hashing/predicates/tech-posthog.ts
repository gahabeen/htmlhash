import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'app\\.posthog\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'posthog'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
