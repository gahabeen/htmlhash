import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?<!elo\\.io)/cargo\\.'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Cargo.Config'),
    matchRegexInInnerHTML('script', '__cargo_js_ver__'),
    // in meta
    matchRegexInAttribute('meta', 'cargo_title', ''),
    // in scripts

    // in html

    // in text

    // in css
])
