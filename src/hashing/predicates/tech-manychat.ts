import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'widget\\.manychat\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'mcwidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
