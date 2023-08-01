import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/twentyseventeen/'),
    // in dom
    matchSelector(`link#twentyseventeen-style-css`),
    // in js
    matchRegexInInnerHTML('script', 'twentyseventeenScreenReaderText'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
