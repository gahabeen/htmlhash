import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/catch-box(?:-pro)?/'),
    // in dom
    matchSelector(`link[href*='/wp-content/themes/catch-box/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
