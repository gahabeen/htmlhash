import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'WIZIBLOCK_ARRAY'),
    matchRegexInInnerHTML('script', 'wiziblocks_list'),
    matchRegexInInnerHTML('script', 'wsCfg.bNavAjust'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
