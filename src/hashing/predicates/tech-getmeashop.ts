import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.getmeashop.com']`),
    // in js
    matchRegexInInnerHTML('script', 'gmas_base_url'),
    matchRegexInInnerHTML('script', 'search_api_base_uri'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
