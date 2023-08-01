import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.kapturecrm\\.com/.+\\?ver=([\\d\\.]+)\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Kapchat'),
    matchRegexInInnerHTML('script', 'kap_chat_js'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
