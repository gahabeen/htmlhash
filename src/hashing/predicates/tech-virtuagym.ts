import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.virtuagym.com'][target='_blank'], iframe[src*='.virtuagym.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'VGTutorial'),
    matchRegexInInnerHTML('script', 'open_vg_custom_modal'),
    matchRegexInInnerHTML('script', 'trigger_vg_neutral_message'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
