import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'MageWorx_SearchSuiteAutocomplete'),
    // in dom
    matchSelector(`link[href*='MageWorx_SearchSuiteAutocomplete']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
