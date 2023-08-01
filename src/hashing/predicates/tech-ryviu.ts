import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.ryviu\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ryviu_global_settings'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
