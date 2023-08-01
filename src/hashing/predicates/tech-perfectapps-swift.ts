import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'swift\\.perfectapps\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ps_apiURI'),
    matchRegexInInnerHTML('script', 'ps_storeUrl'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
