import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.contentsquare\\.net/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'CS_CONF.trackerDomain'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
