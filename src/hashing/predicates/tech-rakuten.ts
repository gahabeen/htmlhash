import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'tag\\.rmp\\.rakuten\\.com'),
    matchRegexInAttribute('script', 'src', '\\.linksynergy\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'rakutenRanMID'),
    matchRegexInInnerHTML('script', 'rakutenSource'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
