import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.foresee\\.com/code/([\\d.]+)-oo/oo_engine\\.min\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'OOo.Browser'),
    matchRegexInInnerHTML('script', 'OOo.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
