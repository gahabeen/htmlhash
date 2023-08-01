import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'themes/oceanwp\\S*\\.js(?:\\?ver=([0-9.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`body[class*='oceanwp-theme']`),
    matchSelector(`link[id*='oceanwp']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
