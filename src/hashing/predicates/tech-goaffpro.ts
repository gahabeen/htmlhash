import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'api\\.goaffpro\\.com/loader\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'gfp_api_server'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
