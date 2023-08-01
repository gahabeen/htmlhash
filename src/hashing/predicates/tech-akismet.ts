import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/akismet/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='/wp-content/plugins/akismet/']`),
    // in js
    matchRegexInInnerHTML('script', 'ak_js.checkValidity'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
