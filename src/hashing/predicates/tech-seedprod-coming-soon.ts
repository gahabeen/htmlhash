import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/coming-soon/'),
    // in dom
    matchSelector(`link[href*='/wp-content/plugins/coming-soon/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
