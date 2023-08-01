import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'nsg\\.symantec\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'DO_NORTON_SHOPPING'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
