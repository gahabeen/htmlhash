import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.carbonads\\.com/'),
    // in dom
    matchSelector(`div#carbonads-container`),
    // in js
    matchRegexInInnerHTML('script', '_carbonads'),
    matchRegexInInnerHTML('script', '_carbonads_go'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
