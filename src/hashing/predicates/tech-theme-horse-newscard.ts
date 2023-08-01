import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/newscard(?:-pro)?/'),
    // in dom
    matchSelector(`link[href*='/wp-content/themes/newscard-pro/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
