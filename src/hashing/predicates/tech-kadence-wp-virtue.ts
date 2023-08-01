import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/virtue/.+main-min\\.js(?:\\?ver=([\\d\\.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='/wp-content/themes/virtue/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
