import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'widget\\.spotii\\.me'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'spotiiConfig'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
