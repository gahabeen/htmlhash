import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.widgetwhats\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'wwwa_loaded'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
