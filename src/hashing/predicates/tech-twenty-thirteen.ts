import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/twentythirteen/'),
    // in dom
    matchSelector(`link#twentythirteen-style-css`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
