import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'ko-fi\\.com/widgets'),
    // in dom
    matchSelector(`a[href*='ko-fi.com/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'kofiwidget2'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
