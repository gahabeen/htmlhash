import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'assets\\.pixlee\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Pixlee'),
    matchRegexInInnerHTML('script', 'Pixlee_Analytics'),
    matchRegexInInnerHTML('script', 'TurnTo'),
    matchRegexInInnerHTML('script', 'turnToConfig'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
