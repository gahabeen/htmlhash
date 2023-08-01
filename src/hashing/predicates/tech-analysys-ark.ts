import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'AnalysysFangzhou_JS_SDK\\.min\\.js\\?v=([\\d.]+)\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AnalysysAgent'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
