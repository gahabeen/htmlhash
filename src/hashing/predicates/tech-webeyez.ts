import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '___WEBEYEZ_CACHE'),
    matchRegexInInnerHTML('script', '___WEBEYEZ_REGISTER_ERROR'),
    matchRegexInInnerHTML('script', 'webeyez_wzPageEntryKey'),
    matchRegexInInnerHTML('script', 'webeyezstartAll'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
