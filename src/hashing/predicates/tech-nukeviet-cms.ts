import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'nv_DigitalClock'),
    matchRegexInInnerHTML('script', 'nv_is_change_act_confirm'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'NukeViet v([\\d.]+)\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
