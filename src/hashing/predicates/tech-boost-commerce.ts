import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'bcSfFilterConfig.api.filterUrl'),
    matchRegexInInnerHTML('script', 'boostPFSAppConfig.api.filterUrl'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
