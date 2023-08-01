import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/phenomic\\.browser\\.[a-f0-9]+\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<[^>]+id="phenomic(?:root)?"'),
    // in text

    // in css
])
