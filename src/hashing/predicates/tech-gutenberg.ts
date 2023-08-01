import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/gutenberg/'),
    // in dom
    matchSelector(`link[href*='/wp-content/plugins/gutenberg/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
