import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'twemoji(?:\\.min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'twemoji'),
    matchRegexInInnerHTML('script', 'twemoji.base'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
