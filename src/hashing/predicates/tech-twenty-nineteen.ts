import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/twentynineteen/'),
    // in dom
    matchSelector(`link#twentynineteen-style-css`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
