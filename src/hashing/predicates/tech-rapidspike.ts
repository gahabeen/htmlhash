import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.rapidspike\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'rspike_timing'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
