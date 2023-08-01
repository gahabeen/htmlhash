import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/spacious(?:-pro)?/'),
    // in dom
    matchSelector(`link#spacious_style-css`),
    // in js
    matchRegexInInnerHTML('script', 'spacious_slider_value'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
