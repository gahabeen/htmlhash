import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'MochiKit(?:\\.min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MochiKit'),
    matchRegexInInnerHTML('script', 'MochiKit.MochiKit.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
