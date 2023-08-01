import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdnjs\\.buymeacoffee\\.com/([\\d.]+)\\;version:\\1'),
    // in dom
    matchSelector(`a[href*='www.buymeacoffee.com/'][target='_blank']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
