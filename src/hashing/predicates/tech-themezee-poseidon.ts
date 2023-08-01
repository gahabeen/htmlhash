import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/poseidon/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'poseidonScreenReaderText'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
