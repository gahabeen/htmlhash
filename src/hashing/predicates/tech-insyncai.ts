import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`iframe[src*='insync_iframe_webchat_js_prod'], iframe#insync-iframe`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
