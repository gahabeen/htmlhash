import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.crystallize.com']`),
    // in js
    matchRegexInInnerHTML('script', '__crystallizeConfig.API_URL'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
