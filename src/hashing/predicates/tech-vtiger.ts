import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Vtiger'),
    matchRegexInInnerHTML('script', 'Vtiger_Base_Js'),
    matchRegexInInnerHTML('script', 'Vtiger_Helper_Js'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
