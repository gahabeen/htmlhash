import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/wpforms(?:-lite)?/.+(?:frontend\\.min|wpforms)\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'wpforms'),
    matchRegexInInnerHTML('script', 'wpforms_settings'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
