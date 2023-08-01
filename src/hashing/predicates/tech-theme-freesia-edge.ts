import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/edge(?:-plus)?/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'edge_slider_value'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
