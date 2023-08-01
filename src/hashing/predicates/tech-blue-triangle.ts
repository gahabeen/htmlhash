import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.btttag\\.com/btt\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_bttUtil.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
