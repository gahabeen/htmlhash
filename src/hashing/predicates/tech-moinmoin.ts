import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'moin(?:_static(\\d)(\\d)(\\d)|.+)/common/js/common\\.js\\;version:\\1.\\2.\\3'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'show_switch2gui'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
