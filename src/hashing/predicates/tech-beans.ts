import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.trybeans\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Beans3'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
