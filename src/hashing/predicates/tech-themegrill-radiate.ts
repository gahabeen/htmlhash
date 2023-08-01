import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/radiate(?:-pro)?/'),
    // in dom
    matchSelector(`link#radiate-style-css`),
    // in js
    matchRegexInInnerHTML('script', 'radiateScriptParam'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
