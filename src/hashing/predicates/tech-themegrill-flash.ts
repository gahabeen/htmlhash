import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/flash(?:-pro)?/'),
    // in dom
    matchSelector(`link[href='/wp-content/themes/flash']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
