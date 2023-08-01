import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/fluida(?:-plus)?/.+frontend\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom
    matchSelector(`link#fluida-themefonts-css`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
