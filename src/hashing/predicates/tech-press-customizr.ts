import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/customizr/.+js(?:\\?ver=([\\d\\.]+))?\\;version:\\1'),
    // in dom
    matchSelector(`style#customizr-skin-inline-css, link#customizr-style-css`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
