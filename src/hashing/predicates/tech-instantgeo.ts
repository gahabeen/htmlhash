import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js\\.instantgeo\\.info'),
    matchRegexInAttribute('script', 'src', 'script\\.instantgeo\\.info'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'geojs'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
