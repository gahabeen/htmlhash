import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/twentysixteen/'),
    // in dom
    matchSelector(`link#twentysixteen-style-css`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
