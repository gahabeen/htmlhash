import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'raphael(?:-([\\d.]+))?(?:\\.min)?\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Raphael.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
