import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/yett@([\\d\\.]+)/dist/yett\\.min\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'YETT_BLACKLIST'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
