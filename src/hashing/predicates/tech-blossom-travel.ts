import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/blossom-travel(?:-pro)?/.+custom\\.min\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'blossom_travel_data'),
    matchRegexInInnerHTML('script', 'blossom_travel_pro_data'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
