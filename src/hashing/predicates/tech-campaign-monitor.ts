import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.createsend1\\.com/'),
    // in dom
    matchSelector(`input[value='campaignmonitor_subscribe_form'][name='form_id'], form[action*='createsend'][class='js-cm-form']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
