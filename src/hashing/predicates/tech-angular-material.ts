import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/([\\d.rc-]+)?/angular-material(?:\\.min)?\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ngMaterial'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
