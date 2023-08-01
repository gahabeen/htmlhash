import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/evolve(?:-plus)?/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'evolve_js_local_vars'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
