import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.actito\\.be'),
    matchRegexInAttribute('script', 'src', '\\.advisor\\.smartfocus\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_actGoal'),
    matchRegexInInnerHTML('script', 'smartFocus'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
