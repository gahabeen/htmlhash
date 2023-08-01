import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '__vg.video_greet_button_src'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
