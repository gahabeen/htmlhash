import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/(?:([\\d.])+/)?highlight(?:\\.min)?\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'hljs.highlightBlock'),
    matchRegexInInnerHTML('script', 'hljs.listLanguages'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
