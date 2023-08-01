import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.mews\\.li/'),
    // in dom
    matchSelector(`a[href*='.mews.li/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'Mews'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
