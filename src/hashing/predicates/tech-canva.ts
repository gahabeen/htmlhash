import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'canva_scriptExecutor'),
    matchRegexInInnerHTML('script', 'canva_debounceResize'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
