import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/minamaze(?:-pro)?/'),
    // in dom
    matchSelector(`link#minamaze-style-css`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
