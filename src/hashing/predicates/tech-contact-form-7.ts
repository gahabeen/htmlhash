import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/contact-form-7/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='/wp-content/plugins/contact-form-7/']`),
    // in js
    matchRegexInInnerHTML('script', 'wpcf7'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
