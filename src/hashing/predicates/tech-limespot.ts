import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.personalizer\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'LimeSpot.CartItems'),
    matchRegexInInnerHTML('script', 'LimeSpot.Recommendations'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
