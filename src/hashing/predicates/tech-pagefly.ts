import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.pagefly\\.io'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__pagefly_setting__'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
