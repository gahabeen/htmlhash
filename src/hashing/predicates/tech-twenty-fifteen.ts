import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/twentyfifteen/'),
    // in dom
    matchSelector(`link#twentyfifteen-style-css`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
