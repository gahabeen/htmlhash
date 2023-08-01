import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.analyzee\\.io/sdk/(.*)\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Analyzee._sessionExtend'),
    matchRegexInInnerHTML('script', 'analyzee._session'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
