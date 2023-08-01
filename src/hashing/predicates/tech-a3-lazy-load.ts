import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/a3-lazy-load/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'a3_lazyload_extend_params'),
    matchRegexInInnerHTML('script', 'a3_lazyload_params'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
