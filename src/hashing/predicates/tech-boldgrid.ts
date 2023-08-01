import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/post-and-page-builder'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link rel=["\']stylesheet["\'] [^>]+boldgrid'),
    matchRegex('<link rel=["\']stylesheet["\'] [^>]+post-and-page-builder'),
    matchRegex('<link[^>]+s\\d+\\.boldgrid\\.com'),
    // in text

    // in css
])
