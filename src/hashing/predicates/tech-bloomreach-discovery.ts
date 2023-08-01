import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.brsrvr\\.com/'),
    matchRegexInAttribute('script', 'src', '\\.brcdn\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BrTrk.scriptVersion'),
    matchRegexInInnerHTML('script', 'br_data.acct_id'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
