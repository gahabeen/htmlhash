import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cf\\.kampyle\\.com/k_button\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'KAMPYLE_COMMON'),
    matchRegexInInnerHTML('script', 'k_track'),
    matchRegexInInnerHTML('script', 'kampyle'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
