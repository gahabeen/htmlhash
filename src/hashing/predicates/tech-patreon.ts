import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'patreon-connect/assets/.+ver=([\\d.]+)\\;version:\\1'),
    // in dom
    matchSelector(`a[href*='www.patreon.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
