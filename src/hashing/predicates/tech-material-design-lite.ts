import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:/([\\d.]+))?/material(?:\\.min)?\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MaterialIconToggle'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]* href="[^"]*material(?:\\.[\\w]+-[\\w]+)?(?:\\.min)?\\.css'),
    // in text

    // in css
])
