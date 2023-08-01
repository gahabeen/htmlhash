import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div[id^='__qiankun_']`),
    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', '__POWERED_BY_QIANKUN__'),
    // in html

    // in text

    // in css
])
