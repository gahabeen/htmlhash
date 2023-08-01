import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.skimresources\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__SKIM_JS_GLOBAL__'),
    matchRegexInInnerHTML('script', 'addSkimlinks'),
    matchRegexInInnerHTML('script', 'skimlinksAPI'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
