import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SPDesignerProgID'),
    matchRegexInInnerHTML('script', '_spBodyOnLoadCalled'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'Microsoft SharePoint'),
    // in scripts

    // in html

    // in text

    // in css
])
