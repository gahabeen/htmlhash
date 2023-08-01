import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'lootly\\.io/'),
    // in dom
    matchSelector(`iframe[src*='lootly.io/']`),
    // in js
    matchRegexInInnerHTML('script', 'Lootly.config'),
    matchRegexInInnerHTML('script', 'lootlyWidgetInit'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
