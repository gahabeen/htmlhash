import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ipo.api.hideSpinner'),
    // in meta
    matchRegexInAttribute('meta', 'author', 'Antee\\ss\\.r\\.o\\.'),
    // in scripts

    // in html

    // in text

    // in css
])
