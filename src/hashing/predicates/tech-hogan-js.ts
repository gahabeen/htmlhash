import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'hogan-[.-]([\\d.]*\\d)[^/]*\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', '([\\d.]+)/hogan(?:\\.min)?\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Hogan'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
