import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '_bubble_page_load_data'),
    matchRegexInInnerHTML('script', 'bubble_environment'),
    matchRegexInInnerHTML('script', 'bubble_hostname_modifier'),
    matchRegexInInnerHTML('script', 'bubble_version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
