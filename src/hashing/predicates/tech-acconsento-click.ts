import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='//acconsento.click/']`),
    // in js
    matchRegexInInnerHTML('script', 'AcconsentoAPI'),
    matchRegexInInnerHTML('script', 'acconsentoCreateElement'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
