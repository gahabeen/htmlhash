import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.outbrain\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'OB_ADV_ID'),
    matchRegexInInnerHTML('script', 'OB_releaseVer'),
    matchRegexInInnerHTML('script', 'OutbrainPermaLink'),
    matchRegexInInnerHTML('script', 'obApi.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
