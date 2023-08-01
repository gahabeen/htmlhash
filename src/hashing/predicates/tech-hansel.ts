import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.hansel\\.io/web/([\\d\\.]+)/\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Hansel'),
    matchRegexInInnerHTML('script', 'HanselPX'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
