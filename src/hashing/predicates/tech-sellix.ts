import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.sellix\\.io/static/js/embed\\.js'),
    // in dom
    matchSelector(`link[href*='.sellix.io']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
