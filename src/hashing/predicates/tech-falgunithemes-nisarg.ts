import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/nisarg(?:pro)?/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'nisargpro_script_vars'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
