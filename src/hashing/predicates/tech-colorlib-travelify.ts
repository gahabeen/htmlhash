import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/travelify/'),
    // in dom
    matchSelector(`link#travelify-style-css`),
    // in js
    matchRegexInInnerHTML('script', 'travelify_slider_value'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
