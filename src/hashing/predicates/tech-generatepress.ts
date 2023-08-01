import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'themes/generatepress\\S*\\.js(?:\\?ver=([0-9.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`body[class*='generatepress-theme']`),
    matchSelector(`link[id*='generate-style']`),
    matchSelector(`link[id*='generatepress']`),
    // in js
    matchRegexInInnerHTML('script', 'generatepressMenu'),
    matchRegexInInnerHTML('script', 'generatepressNavSearch'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
