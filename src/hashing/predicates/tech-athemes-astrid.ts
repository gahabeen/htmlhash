import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/astrid/'),
    // in dom
    matchSelector(`link#astrid-style-css`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
