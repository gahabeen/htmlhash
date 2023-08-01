import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/vogue(?:-child)?/'),
    // in dom
    matchSelector(`link#vogue-style-css`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
