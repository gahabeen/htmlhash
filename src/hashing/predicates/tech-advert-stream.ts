import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:ad\\.advertstream\\.com|adxcore\\.com)'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'advst_is_above_the_fold'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
