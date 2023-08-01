import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '@findify/bundle@([\\d.]+)/dist/.+\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'FindifyAnalytics'),
    matchRegexInInnerHTML('script', 'findify'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
