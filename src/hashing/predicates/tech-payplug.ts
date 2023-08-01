import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'payplug.card'),
    matchRegexInInnerHTML('script', 'payplug_ajax_url'),
    matchRegexInInnerHTML('script', 'PAYPLUG_DOMAIN'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
