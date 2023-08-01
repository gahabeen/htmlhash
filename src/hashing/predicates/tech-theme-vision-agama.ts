import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/agama(?:-pro)?/.+functions\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'agama'),
    matchRegexInInnerHTML('script', 'agama_pro'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
