import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.creator-spring\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'webpackJsonpteespring-custom-storefront'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
