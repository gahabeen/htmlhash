import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/bravada(?:-plus)?/.+frontend\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom
    matchSelector(`link#bravada-style-css, img[src*='/wp-content/themes/bravada/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
