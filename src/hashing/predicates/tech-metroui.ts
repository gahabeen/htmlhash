import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='//cdn.metroui.org.ua/']`),
    // in js
    matchRegexInInnerHTML('script', 'Metro.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
