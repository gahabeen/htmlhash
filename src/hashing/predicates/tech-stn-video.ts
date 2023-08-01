import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'embed\\.sendtonews\\.com/'),
    // in dom

    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'embed\\.sendtonews\\.com/'),
    // in html

    // in text

    // in css
])
