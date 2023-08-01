import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.app.neoncrm.com/']`),
    // in js
    matchRegexInInnerHTML('script', '_neoncrm_ga'),
    matchRegexInInnerHTML('script', 'neonPayCard'),
    matchRegexInInnerHTML('script', 'neoncrm_email_ajax_object'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
