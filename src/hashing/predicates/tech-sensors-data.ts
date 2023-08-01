import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'sensorsdata'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'sa.lib_version'),
    matchRegexInInnerHTML('script', 'sensorsdata_app_js_bridge_call_js'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
