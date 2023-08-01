import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:/([\\d\\.]+))?/mobx(?:\\.[a-z]+){0,2}\\.js(?:$|\\?)\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__mobxGlobal'),
    matchRegexInInnerHTML('script', '__mobxGlobals'),
    matchRegexInInnerHTML('script', '__mobxInstanceCount'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
