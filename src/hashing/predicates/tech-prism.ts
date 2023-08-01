import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'prism\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Prism'),
    matchRegexInInnerHTML('script', 'apex.libVersions.prismJs'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
