import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.stackla\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Stackla'),
    matchRegexInInnerHTML('script', 'stacklaWidgetJsonp'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
