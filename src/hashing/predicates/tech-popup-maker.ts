import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/popup-maker/(?:.+site(?:\\.min)?\\.js\\?.+ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'pum_popups'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
