import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^https://(?:cdn\\.)?id5-sync\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ID5._version'),
    matchRegexInInnerHTML('script', '__id5_instances'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
