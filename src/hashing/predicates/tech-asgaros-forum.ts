import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/asgaros-forum/'),
    // in dom
    matchSelector(`link[href*='/wp-content/plugins/asgaros-forum/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
