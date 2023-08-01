import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/uploads/essential-addons-elementor/'),
    // in dom
    matchSelector(`link[href*='/wp-content/uploads/essential-addons-elementor/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
