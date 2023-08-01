import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'addtoany\\.com/menu/page\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'a2apage_init'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
