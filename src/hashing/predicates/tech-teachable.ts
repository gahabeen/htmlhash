import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.teachablecdn\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'isTeachable'),
    matchRegexInInnerHTML('script', 'teachableIcons'),
    matchRegexInInnerHTML('script', 'trackTeachableGAEvent'),
    // in meta
    matchRegexInAttribute('meta', 'asset_host', '\\.teachablecdn\\.com'),
    // in scripts

    // in html

    // in text

    // in css
])
