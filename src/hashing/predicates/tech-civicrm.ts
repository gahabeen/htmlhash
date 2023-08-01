import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='/civicrm/contribute/transact'], link[href*='/com_civicrm/civicrm/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
