import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SnapEngage'),
    matchRegexInInnerHTML('script', 'SnapEngageChat'),
    matchRegexInInnerHTML('script', 'snapengage_mobile'),
    // in meta

    // in scripts

    // in html
    matchRegex('<!-- begin SnapEngage'),
    // in text

    // in css
])
