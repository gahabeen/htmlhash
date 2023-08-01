import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/themes/donovan/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'donovanScreenReaderText'),
    matchRegexInInnerHTML('script', 'donovan_menu_title'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
