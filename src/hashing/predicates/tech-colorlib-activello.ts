import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/activello/'),
    // in dom
    matchSelector(`link#activello-style-css`),
    // in js
    matchRegexInInnerHTML('script', 'ActivelloIsMobile'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
