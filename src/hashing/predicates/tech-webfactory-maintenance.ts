import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='/wp-content/plugins/maintenance/']`),
    // in js
    matchRegexInInnerHTML('script', 'mtnc_front_options'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
