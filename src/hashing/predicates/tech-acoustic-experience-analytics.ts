import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'TLT.config.core.modules.TLCookie'),
    matchRegexInInnerHTML('script', 'TLT_VERSION'),
    matchRegexInInnerHTML('script', 'TeaLeaf'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
