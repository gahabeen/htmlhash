import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/caldera-forms/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom
    matchSelector(`link[href*='/wp-content/plugins/caldera-forms/']`),
    // in js
    matchRegexInInnerHTML('script', 'calderaForms'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
