import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:^[^/]*//[^/]*viglink\\.com/api/|vglnk\\.js)'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'vglnk'),
    matchRegexInInnerHTML('script', 'vl_cB'),
    matchRegexInInnerHTML('script', 'vl_disable'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
