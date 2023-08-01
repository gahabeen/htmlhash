import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'sdk\\.bigin\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BIGIN_SDK_API'),
    matchRegexInInnerHTML('script', 'bigin._checkDataSize'),
    matchRegexInInnerHTML('script', 'biginCafe24DisableOptions'),
    matchRegexInInnerHTML('script', 'bigin_search'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
