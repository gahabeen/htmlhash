import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.acquire\\.io/cobrowse/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'acquireCobrowseRTC'),
    matchRegexInInnerHTML('script', 'acquireCobrowseSettings'),
    matchRegexInInnerHTML('script', 'acquireConfigNodeServer'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
