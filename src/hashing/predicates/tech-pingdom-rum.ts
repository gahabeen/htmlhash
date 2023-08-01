import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'rum-static\\.pingdom\\.net'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_prum'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
