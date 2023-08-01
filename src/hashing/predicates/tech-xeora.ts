import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/_bi_sps_v.+\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<input type="hidden" name="_sys_bind_\\d+" id="_sys_bind_\\d+" />'),
    // in text

    // in css
])
