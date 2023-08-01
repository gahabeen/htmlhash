import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:get.)?exitintel\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'exitintel.VERSION'),
    matchRegexInInnerHTML('script', 'exitintelAccount'),
    matchRegexInInnerHTML('script', 'exitintelConfig'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
