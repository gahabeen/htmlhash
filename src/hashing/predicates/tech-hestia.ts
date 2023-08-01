import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'themes/hestia.*\\.js(?:\\?ver=([0-9.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`body[class*='hestia-theme']`),
    matchSelector(`link[id*='hestia']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
