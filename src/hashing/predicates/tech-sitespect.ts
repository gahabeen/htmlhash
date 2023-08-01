import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/__ssobj/core\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ss_dom_var'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
