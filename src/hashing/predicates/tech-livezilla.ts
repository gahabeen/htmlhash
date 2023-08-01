import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`#lz_overlay_chat`),
    // in js
    matchRegexInInnerHTML('script', 'lz_chat_execute'),
    matchRegexInInnerHTML('script', 'lz_code_id'),
    matchRegexInInnerHTML('script', 'lz_tracking_set_widget_visibility'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
