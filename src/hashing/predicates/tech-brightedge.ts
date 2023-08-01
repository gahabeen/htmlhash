import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.brightedge\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BEJSSDK.CLIENT_VERSION'),
    matchRegexInInnerHTML('script', '_bright3.VERSION'),
    matchRegexInInnerHTML('script', 'be_sdk_options'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
