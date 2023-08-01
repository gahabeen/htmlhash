import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.vev\\.design/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'vev.App.compare'),
    matchRegexInInnerHTML('script', 'vev.DEFAULT_APP_STATE'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
