import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.attn\\.tv'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__attentive'),
    matchRegexInInnerHTML('script', '__attentive_domain'),
    matchRegexInInnerHTML('script', 'attn_email_save'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
