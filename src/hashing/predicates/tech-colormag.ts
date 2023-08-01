import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'themes/colormag.*\\.js(?:\\?ver=([0-9.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`body[class*='colormag-theme']`),
    matchSelector(`link[id*='colormag']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
