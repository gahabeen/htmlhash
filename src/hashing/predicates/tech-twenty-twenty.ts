import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/twentytwenty/'),
    // in dom
    matchSelector(`link#twentytwenty-style-css`),
    // in js
    matchRegexInInnerHTML('script', 'twentytwenty'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
