import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'vspiritbutton'),
    matchRegexInInnerHTML('script', 'vspirits_chat_client'),
    matchRegexInInnerHTML('script', 'vspiritsizeheight'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
