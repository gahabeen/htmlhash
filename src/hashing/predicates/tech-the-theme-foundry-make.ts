import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/make(?:-child)?/.+frontend\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MakeDynamicStylesheet'),
    matchRegexInInnerHTML('script', 'MakeFrontEnd'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
