import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/prebid\\.js'),
    matchRegexInAttribute('script', 'src', 'adnxs\\.com/[^"]*(?:prebid|/pb\\.js)'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PREBID_TIMEOUT'),
    matchRegexInInnerHTML('script', 'pbjs'),
    matchRegexInInnerHTML('script', 'pbjs.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
