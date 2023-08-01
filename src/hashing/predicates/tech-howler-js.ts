import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'howler@([\\d.]+)/dist/howler\\.min\\.js\\;version:\\1'),
    matchRegexInAttribute('script', 'src', 'howler/([\\d.]+)/howler(?:\\.core)?\\.min\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Howler'),
    matchRegexInInnerHTML('script', 'HowlerGlobal'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
