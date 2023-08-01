import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'FmasJavaScript'),
    matchRegexInInnerHTML('script', 'fmasGenderSizeTextVariantIdCollection'),
    matchRegexInInnerHTML('script', 'fmasUniversalWidgetJsFileName'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
