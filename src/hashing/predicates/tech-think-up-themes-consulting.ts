import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/consulting(?:-pro)?/'),
    // in dom
    matchSelector(`link#consulting-style-css`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
