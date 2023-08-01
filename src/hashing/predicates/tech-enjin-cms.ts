import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.enjin\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Enjin_Core_Storage_Cache'),
    matchRegexInInnerHTML('script', 'Enjin_UI'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
