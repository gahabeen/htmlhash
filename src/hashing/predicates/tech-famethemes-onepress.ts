import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'OnePress_Plus'),
    matchRegexInInnerHTML('script', 'onepressIsMobile'),
    matchRegexInInnerHTML('script', 'onepress_js_settings'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
