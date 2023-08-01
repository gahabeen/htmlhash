import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.ebis\\.ne\\.jp/'),
    // in dom
    matchSelector(`a[href*='.ebis.ne.jp/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'ebis.c.pageurl'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
