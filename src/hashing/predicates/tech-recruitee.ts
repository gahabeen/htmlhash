import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.recruitee.com']`),
    // in js
    matchRegexInInnerHTML('script', 'RtApp.mapBoxToken'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
