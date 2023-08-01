import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'accessibly\\.onthemapmarketing\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'accessibilityWidget.name'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
