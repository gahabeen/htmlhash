import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'themes/neve\\S*\\.js(?:\\?ver=([0-9.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`body[class*='neve-theme']`),
    matchSelector(`link[id*='neve-style']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
