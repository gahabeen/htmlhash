import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(
        `img[src*='cdn.sanity.io'],img[srcset*='cdn.sanity.io'],video[src*='cdn.sanity.io'],source[src*='cdn.sanity.io'],source[srcset*='cdn.sanity.io'],track[src*='cdn.sanity.io']`
    ),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
