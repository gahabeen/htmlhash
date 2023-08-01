import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/e(?:s|S)tore(?:-pro)?/'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'eStore v\\.([\\d\\.]+)\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
