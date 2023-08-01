import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.landbot\\.io/.*-([\\d\\.]+)\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'LandbotLivechat'),
    matchRegexInInnerHTML('script', 'initLandbot'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
