import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.testfreaks\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'applyTestFreaks'),
    matchRegexInInnerHTML('script', 'testFreaks'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
