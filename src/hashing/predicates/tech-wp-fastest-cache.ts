import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/cache/wpfc-minified/'),
    // in dom
    matchSelector(`link[href*='/wp-content/cache/wpfc-minified/']`),
    // in js
    matchRegexInInnerHTML('script', 'Wpfcll'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
