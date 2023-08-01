import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/advanced-custom-fields(?:-pro)?/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'acf'),
    matchRegexInInnerHTML('script', 'acfL10n'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
