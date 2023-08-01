import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/twentyfourteen/'),
    // in dom
    matchSelector(`link#twentyfourteen-style-css, style#twentyfourteen-lato-css`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
