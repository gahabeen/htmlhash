import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'EPJS_menu_template'),
    matchRegexInInnerHTML('script', 'EPrints'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'EPrints ([\\d.]+)\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
