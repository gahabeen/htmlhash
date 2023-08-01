import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/responsive(?:pro)?/'),
    // in dom
    matchSelector(`link[href*='/wp-content/themes/responsive/'], link[href*='/wp-content/themes/responsivepro/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
