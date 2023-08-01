import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'xregexp[.-]([\\d.]*\\d)[^/]*\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '/([\\d.]+)/xregexp(?:\\.min)?\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', 'xregexp.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'XRegExp.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
