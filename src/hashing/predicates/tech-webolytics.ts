import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'webolytics_site_tag'),
    matchRegexInInnerHTML('script', 'webolytics_webhook_call'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
