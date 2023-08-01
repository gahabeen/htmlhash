import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`iframe[scr*='.strut.fit/']`),
    // in js
    matchRegexInInnerHTML('script', 'rerenderStrutfit'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
