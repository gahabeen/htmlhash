import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/mantra(?:-plus)?/.+frontend\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom
    matchSelector(`link#mantra-style-css, img[src*='/wp-content/themes/mantra/']`),
    // in js
    matchRegexInInnerHTML('script', 'mantra_mobilemenu_init'),
    matchRegexInInnerHTML('script', 'mantra_onload'),
    matchRegexInInnerHTML('script', 'mantra_options'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
