import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'fud_msg_focus'),
    matchRegexInInnerHTML('script', 'fud_tree_msg_focus'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
