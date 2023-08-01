import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '__core-js_shared__'),
    matchRegexInInnerHTML('script', '__core-js_shared__.versions.0.version'),
    matchRegexInInnerHTML('script', '_babelPolyfill'),
    matchRegexInInnerHTML('script', 'core'),
    matchRegexInInnerHTML('script', 'core.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
