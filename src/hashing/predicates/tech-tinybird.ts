import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.tinybird.co/js/index\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Tinybird'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
