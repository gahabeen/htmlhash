import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.readspeaker\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ReadSpeaker'),
    matchRegexInInnerHTML('script', 'ReadSpeaker.meta.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
