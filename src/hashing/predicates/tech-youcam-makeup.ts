import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'plugins-media\\.(?:perfectcorp|makeupar)\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'YMK.applyMakeupByLook'),
    matchRegexInInnerHTML('script', 'YMK.calDeltaE'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
