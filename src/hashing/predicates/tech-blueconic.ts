import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BlueConicEngagement'),
    matchRegexInInnerHTML('script', 'blueConicClient'),
    matchRegexInInnerHTML('script', 'blueConicPreListeners'),
    matchRegexInInnerHTML('script', 'loadValuesFromBlueConic'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
