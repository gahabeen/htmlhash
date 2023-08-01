import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'sap-ui-core\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'sap.ui.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
