import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.iadvize\\.com/'),
    // in dom
    matchSelector(`link[href*='.iadvize.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
