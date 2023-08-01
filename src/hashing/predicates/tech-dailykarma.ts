import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'assets\\.dailykarma\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'dkWidgetInit'),
    matchRegexInInnerHTML('script', 'dk_widget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
