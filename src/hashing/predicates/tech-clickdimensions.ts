import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'analytics\\.clickdimensions\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'clickdimensions'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
