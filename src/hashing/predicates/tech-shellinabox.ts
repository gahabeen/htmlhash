import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ShellInABox'),
    // in meta

    // in scripts

    // in html
    matchRegex('<title>Shell In A Box</title>'),
    matchRegex('must be enabled for ShellInABox</noscript>'),
    // in text

    // in css
])
