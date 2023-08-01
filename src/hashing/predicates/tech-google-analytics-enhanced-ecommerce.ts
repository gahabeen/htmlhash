import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'google-analytics\\.com\\/plugins\\/ua\\/(?:ec|ecommerce)\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'gaplugins.EC'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
