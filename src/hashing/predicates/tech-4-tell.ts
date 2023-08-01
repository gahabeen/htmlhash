import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '4tellcdn\\.azureedge\\.net'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_4TellBoost'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
