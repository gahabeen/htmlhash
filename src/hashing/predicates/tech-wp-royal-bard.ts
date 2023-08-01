import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/bard(?:-pro-premium)?/'),
    // in dom
    matchSelector(`link#bard-style-css, style#bard_predefined_custom_css`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
