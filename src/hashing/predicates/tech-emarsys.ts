import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:static|cdn)\\.scarabresearch\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Scarab'),
    matchRegexInInnerHTML('script', 'ScarabQueue'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
