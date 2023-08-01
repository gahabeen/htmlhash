import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.aklamio\\.com/'),
    // in dom
    matchSelector(`a[href*='.aklamio.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
