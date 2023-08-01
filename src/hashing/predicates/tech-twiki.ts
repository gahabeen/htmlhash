import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:TWikiJavascripts|twikilib(?:\\.min)?\\.js)'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<img [^>]*(?:title|alt)="This site is powered by the TWiki collaboration platform'),
    // in text

    // in css
])
