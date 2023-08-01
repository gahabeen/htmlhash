import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/parabola/.+frontend\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom
    matchSelector(`link#parabola-style-css, img[src*='/wp-content/themes/parabola/']`),
    // in js
    matchRegexInInnerHTML('script', 'parabola_mobilemenu_init'),
    matchRegexInInnerHTML('script', 'parabola_settings'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
